const UserModel = require('../models/User_model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail_service')
const tokenService = require('./token_service')
const UserDto = require('../dtos/user_dto')
const ApiError = require('../exeptions/api-errors')

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({
      email: email
    })
    if (candidate) {
      return ApiError.BadRequest(`email ${email} already used`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4()

    const user = await UserModel.create({ email, password: hashPassword, activationLink })
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({
      activationLink
    })
    if (!user) {
      throw ApiError.BadRequest('incorrect link =/')
    }
    user.isActivated = true
    await user.save()
  }

  async login(email, password) {
    const user = await UserModel.findOne({
      email
    })
    if (!user) {
      throw ApiError.BadRequest('can`t find any user')
    }

    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('wrong password')
    }
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDatabase = await tokenService.findToken(refreshToken)

    if (!userData || !token) {
      throw ApiError.UnauthorizedError()
    }
    const user = await UserModel.findById({
      _id: userData.id
    }
    )
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

}

module.exports = new UserService()
const { Router } = require('express')
const userController = require('../controller/user_controller')
const router = Router()
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/auth_middleware')

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({
    min: 3,
    max: 32
  }),
  userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

// router.get('/products', authMiddleware, productController.getAll)

module.exports = router
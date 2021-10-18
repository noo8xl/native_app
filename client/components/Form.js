import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { globalStyles } from '../styles/styles'

const Form = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onLoginEnter = (val) => {
        setLogin(val)
    }
    const onPasswordEnter = (val) => {
        setPassword(val)
    }
    const onSubmit = () => {
        const data = {
            login,
            password
        }
        console.log(data)
        fetch('/login/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response)
        })
    }

   return (
       <View>
           <Text style={{marginBottom: 20}}>Hello Noo8XL!</Text>
            <TextInput 
                style={globalStyles.input} 
                value={login} 
                name='login'
                placeholder='Login' 
                onChangeText={onLoginEnter}/>
           <TextInput 
                style={globalStyles.input} 
                value={password} 
                name={password}
                placeholder='Password' 
                secureTextEntry={true} 
                onChangeText={onPasswordEnter}/>

           <Button 
                title='submit' 
                color="green" 
                onPress={onSubmit}/>
       </View>
   )
}

export default Form
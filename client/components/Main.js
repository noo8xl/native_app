import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/styles'
import Login from './Login'
import AuthPage from '../containers/AuthPage'

const Main = () => {
    
   return (
       <View style={globalStyles.page}>
           <View>
                <AuthPage/>
           </View>
       </View>
   )
}

export default Main

const styles = StyleSheet.create({
    main: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
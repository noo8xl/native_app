import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/styles'
import Form from './Form'

const Main = ({navigation}) => {
    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }
    
   return (
       <View style={globalStyles.page}>
           <View>
               <Form />
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
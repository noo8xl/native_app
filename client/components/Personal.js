import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/styles'

const Personal = ({route}) => {
    const user = route.params
   return (
       <View style={globalStyles.page}>
           <Text>Name: {user.name}</Text>
           <Text>Email: {user.email}</Text>
       </View>
   )
}

export default Personal
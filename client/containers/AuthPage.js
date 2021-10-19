import React from "react";
import { View, Button, StyleSheet } from 'react-native'

const AuthPage = () => {
    return(
        <View>
            <View style={styles.tabs}>
                <Button title='Login'/>
                <Button title='Register'/>
            </View>
        </View>
    )
}
export default AuthPage

const styles = StyleSheet.create({
    tabs: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})
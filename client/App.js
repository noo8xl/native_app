import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Route from './navigation';
import { globalStyles } from './styles/styles';


export default function App() {
  const [loaded, setLoaded] = useState(false)
  setTimeout(() => {
    setLoaded(true)
  }, 2000)

  const user = {
    name: 'Noo8xl',
    email: 'noo8xl@cats.com'
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {
        loaded ?  <Route user={user}/>  : <View style={globalStyles.activityIndicator}><ActivityIndicator size='large' color='red'/></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


import Card from './component/Card';


const App = () => {
  return (
    <View style={styles.container}>
      <Card
        fullname={"Matheus Pereira"}
        linkText={"Comments"}
        onPressLinkText={() => {
          console.log("oi")
        }}
        image={{ uri: 'https://unsplash.it/600/600' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
});

export default App;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import AuthorRow from './component/AuthorRow';

const App = () => {
  return (
    <View style={styles.container}>
      <AuthorRow
        fullname={"Matheus Pereira"}
        linkText={"Comments"}
        onPressLinkText={() => {
          console.log("oi")
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight
  },
});

export default App;

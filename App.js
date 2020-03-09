import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Avatar from './component/Avatar';

console.log(Constants.statusBarHeight)
const App = () => {
  return (
    <View style={styles.container}>
      <Avatar initials="FL" size={35} backgroundColor={'blue'} />
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

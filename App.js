import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


import CardList from './component/CardList';


const App = () => {

  const items = [
    { id: 0, author: "Bob Ross" },
    { id: 1, author: "Chuck Norris" }
 ];

  return (
    <View style={styles.container}>
      <CardList items={items}/>
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

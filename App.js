import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';


import Feed from './screens/Feed';
import CommentInput from './component/CommentInput';
import CommentList from './component/CommentList';
import NavigationBar from './component/NavigationBar';

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationBar title="Lucas" leftText="Queridinho Lucas" />
      <CommentInput />
      <CommentList items={[..."rffe".repeat(3)]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop: 
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  }
});

export default App;

import React from 'react';
import { StyleSheet, Text, View, Platform, Modal, platformVersion } from 'react-native';
import Constants from 'expo-constants';


import Feed from './screens/Feed';
import Comments from './screens/Comments';

const App = () => {

  const [commentsForItem, setCommentsForItem] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItemId, setSelectItemId] = React.useState(null);

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        onPressComments={id => {
          setShowModal(true);
          setSelectItemId(id)
        }}
        commentsForItem={commentsForItem}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={() => {
          setShowModal(false);
          setSelectItemId(null)
        }}
      >
        <Comments
          style={styles.container}
          comments={commentsForItem[selectedItemId] || []}
          onClose={() => {
            setShowModal(false);
            setSelectItemId(null)
          }}
          onSubmitComment={text => {
            if (!commentsForItem.hasOwnProperty(selectedItemId)) {
              const newComment = {
                [selectedItemId]: [text]
              }
              return setCommentsForItem(newComment)
            }

            const newComment = {
              [selectedItemId]: [text, ...commentsForItem[selectedItemId]]
            }

            setCommentsForItem(newComment)
          }}
        />
      </Modal>
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
      Platform.OS === 'ios' && platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  }
});

export default App;

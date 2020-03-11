import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


const CommentInput = ({ onSubmit, placeholder }) => {

   const [textInput, setTextInput] = useState('');

   const handleSubmitEditing = () => {

      if(!textInput) return;

      onSubmit(textInput);
      setTextInput('');
   }


   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            value={textInput}
            placeholder={placeholder}
            onChangeText={text => setTextInput(text)}
            onSubmitEditing={handleSubmitEditing}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(0,0,0,0.1)',
      paddingHorizontal: 20,
      height: 60,
   },
   input: {
      flex: 1
   }
});

CommentInput.propTypes = {
   onSubmit: PropTypes.func,
   placeholder: PropTypes.string
}

CommentInput.defaultProps = {
   placeholder: '',
}

export default CommentInput;
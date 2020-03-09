import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

import { getAvatarColor } from '../utils/getAvatarColor';
import { getInitials } from '../utils/getInitials';

const AuthorRow = ({ fullname, linkText, onPressLinkText }) => {


   return (
      <View style={styles.container}>
         <Avatar
            size={35}
            initials={getInitials(fullname)}
            backgroundColor={getAvatarColor(fullname)}
         />
         <Text style={styles.text} numberOfLines={1}>
            {fullname}
         </Text>
         {!!linkText && (
            <TouchableOpacity onPress={onPressLinkText}>
               <Text numberOfLines={1}>{linkText}</Text>
            </TouchableOpacity>
         )}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 50,
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center'
   },
   text: {
      flex: 1,
      marginHorizontal: 0,
      marginLeft: 5,
   }
})
AuthorRow.PropTypes = {
   fullname: PropTypes.string.isRequired,
   linkText: PropTypes.string.isRequired,
   onPressLinkText: PropTypes.func.isRequired,
}
export default AuthorRow;


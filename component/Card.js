import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

const Card = ({ fullname, image, linkText, onPressLinkText }) => {

   const [loading, setLoading] = React.useState(true);

   return (
      <View style={styles.cardContainer}>
         <AuthorRow
            fullname={fullname}
            linkText={linkText}
            onPressLinkText={onPressLinkText}
         />
         <View style={styles.image}>
            <ActivityIndicator style={StyleSheet.absoluteFill} animating={loading} size="large" />
            <Image style={StyleSheet.absoluteFill} source={image} onLoad={() => setLoading(false)} />
         </View>
      </View>
   )
};

const styles = StyleSheet.create({
   cardContainer: {

   },
   image: {
      aspectRatio: 1,
      backgroundColor: 'rgba(0,0,0,0.02)'
   }
});

Card.propTypes = {
   fullname: PropTypes.string.isRequired,
   image: Image.propTypes.source.isRequired,
   linkText: PropTypes.string,
   onPressLinkText: PropTypes.func
}

Card.defaultProps = {
   linkText: '',
   onPressLinkText: () => { },
}

export default Card;
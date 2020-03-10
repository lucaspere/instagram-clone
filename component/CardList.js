import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';

import Card from './Card';


const CardList = ({items}) => {

   const keyExtractor = ({id}) => id.toString();

   const renderitem = ({item: {id, author}}) => (
      <Card
         fullname={author}
         image={{
            uri: getImageFromId(id)
         }}
      />
   );

   return (
      <FlatList
         data={items}
         renderItem={renderitem}
         keyExtractor={keyExtractor}
      />
   )
}

CardList.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         author: PropTypes.string.isRequired
      })
   ).isRequired
};

export default CardList;
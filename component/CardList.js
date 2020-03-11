import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';

import Card from './Card';


const CardList = ({ items, commentsForItem, onPressComments }) => {

   const keyExtractor = ({ id }) => id.toString();

   const renderitem = ({ item: { id, author } }) => {

   const comment = commentsForItem[id]

   return (
         <Card
            fullname={author}
            image={{
               uri: getImageFromId(id)
            }}
            linkText={`${comment ? comment.length : 0} Comentários`}
            onPressLinkText={() => onPressComments(id)}
            id={id}
         />
      )
   };

   return (
      <FlatList
         data={items}
         renderItem={renderitem}
         keyExtractor={keyExtractor}
         extraData={commentsForItem}
      />
   )
}

CardList.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         author: PropTypes.string.isRequired
      })
   ).isRequired,
   commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
   onPressComments: PropTypes.func.isRequired
};

export default CardList;
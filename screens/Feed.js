import {
   ActivityIndicator,
   Text,
   ViewPropTypes,
   SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { fetchImages } from '../utils/api';

import CardList from '../component/CardList';

const Feed = (props) => {

   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState({ isError: false, errorMessage: '' });
   const [items, setItems] = React.useState([]);

   React.useEffect(() => {
      fetchImages((err, data) => {
         if(err) {
            console.log(err)
            return setError({
               isError: true,
               errorMessage: 'Falha ao carregar a imagem'
            })
         }

         setItems(data);
         setLoading(false);
      })
   });

   const { style } = props;

   if (loading) {
      return <ActivityIndicator size="large" />
   }

   if (error.isError) {
      return <Text>{error.errorMessage}</Text>
   }

   return (
      <SafeAreaView style={style}>
         <CardList items={items} />
      </SafeAreaView>
   )
}

Feed.propTypes = {
   style: ViewPropTypes.style
}

Feed.defaultProps = {
   style: null,
}

export default Feed;
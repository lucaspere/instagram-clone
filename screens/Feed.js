import {
   ActivityIndicator,
   Text,
   ViewPropTypes,
   StyleSheet,
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

      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchImages(setItems, setLoading, setError, signal);

      return () => abortController.abort();

   }, [error, items, loading]);

   const { style } = props;

   if (loading) {
      return <ActivityIndicator style={{ marginTop: style.marginTop }} size="large" />
   }

   if (error.isError) {
      return <Text style={[style, styles.errorMessage]}>{error.errorMessage}</Text>
   }

   return (
      <SafeAreaView style={style}>
         <CardList
            items={items}
            onPressComments={props.onPressComments}
            commentsForItem={props.commentsForItem}
         />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   errorMessage: {
      fontSize: 22,
      textAlign: 'center'
   }
})
Feed.propTypes = {
   style: ViewPropTypes.style
}

Feed.defaultProps = {
   style: null,
}

export default Feed;
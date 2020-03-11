import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import CommentInput from '../component/CommentInput';
import CommentList from '../component/CommentList';
import NavigationBar from '../component/NavigationBar';


const Comments = ({
   style,
   comments,
   onClose,
   onSubmitComment
}) => {

   return (
      <SafeAreaView style={style}>
         <NavigationBar
            title="Comentários"
            leftText="Fechar"
            onPressLeftText={onClose}
         />
         <CommentInput
            placeholder="Deixe um comentário"
            onSubmit={onSubmitComment}
         />
         <CommentList items={comments} />
      </SafeAreaView>
   )
}

Comments.propTypes = {
   style: ViewPropTypes.style,
   comments: PropTypes.arrayOf(PropTypes.string).isRequired,
   onClose: PropTypes.func.isRequired,
   onSubmitComment: PropTypes.func.isRequired
}

Comments.defaultProps = {
   style: null,
}

export default Comments;
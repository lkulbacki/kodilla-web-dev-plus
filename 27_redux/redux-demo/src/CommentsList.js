import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;



// import React from 'react';
// import Comment from './Comment';
//
// const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
//
// export default CommentsList;

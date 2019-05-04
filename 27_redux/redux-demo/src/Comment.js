import React from 'react';

const Comment = ({text, votes, id, upvoteComment, downvoteComment}) =>
    <li>
        {text} <span>votes: {votes}</span> <button onClick={() => upvoteComment(id)}>Thumb up</button> <button onClick={() => downvoteComment(id)}>Thumb down</button>
    </li>;

export default Comment;

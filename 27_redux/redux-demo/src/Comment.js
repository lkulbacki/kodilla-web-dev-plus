import React from 'react';

const Comment = ({text, votes, id, upvoteComment, downvoteComment, removeComment}) =>
    <li>
        {text} <span>votes: {votes}</span> <button onClick={() => upvoteComment(id)}>Thumb up</button> <button onClick={() => downvoteComment(id)}>Thumb down</button> <button onClick={() => removeComment(id)}>X</button>
    </li>;

export default Comment;

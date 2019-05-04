import React from 'react';
import {addComment} from "./actions";

class AddCommentWidget extends React.Component {
    constructor(){
        super();
    }

    addCommentNow = (e) => {
        store.dispatch(addComment('pierwszy komentarz'));
    }

    render() {
        return (
            <input type="text" onSubmit={addCommentNow}/>
        )
    }
}

const Comment = ({text, votes, id, upvoteComment, downvoteComment}) =>
    <li>
        {text} <span>votes: {votes}</span> <button onClick={() => upvoteComment(id)}>Thumb up</button> <button onClick={() => downvoteComment(id)}>Thumb down</button>
    </li>;

export default Comment;

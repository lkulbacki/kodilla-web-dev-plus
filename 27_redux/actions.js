import uuid from './node_modules/uuid/bin/uuid';

const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const UPVOTE = 'UPVOTE';
const DOWNVOTE = 'DOWNVOTE';


function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function upvoteComment(id) {
    return {
        type: UPVOTE,
        id: id
    }
}

function downvoteComment(id) {
    return {
        type: DOWNVOTE,
        id: id
    }
}

const boundCreateComment = text => dispatch(createComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id,text));
const boundRemoveComment = (id) => dispatch(removeComment(id));
const boundUpvoteComment = id => dispatch(upvoteComment(id));
const boundDownvoteComment = id => dispatch(downvoteComment(id));

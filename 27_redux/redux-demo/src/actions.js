import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE';
export const DOWNVOTE_COMMENT = 'DOWNVOTE';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

export function upvoteComment(id) {
    return {
        type: UPVOTE_COMMENT,
        id: id
    }
}

export function downvoteComment(id) {
    return {
        type: DOWNVOTE_COMMENT,
        id: id
    }
}

// const boundCreateComment = text => dispatch(addComment(text));
// const boundEditComment = (id, text) => dispatch(editComment(id,text));
// const boundRemoveComment = (id) => dispatch(removeComment(id));
// const boundUpvoteComment = id => dispatch(upvoteComment(id));
// const boundDownvoteComment = id => dispatch(downvoteComment(id));




import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, UPVOTE, DOWNVOTE} from './actions';

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map((comment) => {
                    if (comment.id === action.id) {
                        return Object.assign({}, comment, {text: action.text})
                    }
                    return comment
                })
            });
        case UPVOTE:
            return Object.assign({}, state, {
                comments: state.comments.map((comment) => {
                    if (comment.id === action.id) {
                        return Object.assign({}, comment, {votes: comment.votes + 1})
                    }
                    return comment
                })
            });
        case DOWNVOTE:
            return Object.assign({}, state, {
                comments: state.comments.map((comment) => {
                    if (comment.id === action.id) {
                        return Object.assign({}, comment, {votes: comment.votes - 1})
                    }
                    return comment
                })
            });
        default:
            return state;
    }
}


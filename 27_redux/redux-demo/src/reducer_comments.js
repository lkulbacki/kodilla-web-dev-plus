import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT} from './actions';

const initialState = [];

export default function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            console.log('ADD_COMMENT');
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.map((comment) => {
                    if (comment.id === action.id) {
                        return Object.assign({}, comment, {text: action.text})
                    }
                    return comment
                })
            });

        case UPVOTE_COMMENT:
            console.log('UPVOTE_COMMENT');
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment
            });

        case DOWNVOTE_COMMENT:
            console.log('DOWNVOTE_COMMENT');
            return state.map((comment) => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {votes: comment.votes - 1})
                }
                return comment
            });

        default:
            return state;
    }
}

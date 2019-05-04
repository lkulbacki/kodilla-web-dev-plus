import { combineReducers } from 'redux';
import comments from './reducer_comments.js';
import users from './reducer_users.js';

export const reducer = combineReducers({
    comments,
    users
});

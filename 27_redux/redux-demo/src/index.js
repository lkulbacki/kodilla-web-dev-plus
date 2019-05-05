import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {reducer} from './reducer';
import {addComment} from "./actions";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


const logstate = () => {
    console.log(store.getState());
};

store.subscribe(logstate);
// store.dispatch(addComment('pierwszy komentarz'));
// store.dispatch(addComment('drugi komentarz'));
// store.dispatch(addComment('czeci komentarz'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

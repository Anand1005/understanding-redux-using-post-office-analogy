// src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { postNameReducer, postsReducer } from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import { fetchPostsEpic } from './epics';

// Combines the postReducer value to the posts which is a rootReducer
const rootReducer = combineReducers({
    posts: postsReducer,
    postName: postNameReducer
});

//Handle the async calls like the API call
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(fetchPostsEpic);

export default store;

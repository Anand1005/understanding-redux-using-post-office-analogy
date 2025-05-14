// src/redux/reducer.js

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_NAME
} from './actionTypes';

const initialState = {
    posts: [],
    loading: false,
    error: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

/**
 * Initial state of the postName
 * @type {{ postName: string; }}
 */
const postNameInitialState = {
    postName: ''
};

/**
 * Reducer of the postName
 * @param {{ postName: string; }} [state=postNameInitialState]
 * @param {*} action
 * @returns {{ postName: any; }}
 */
export const postNameReducer = (state = postNameInitialState, action) => {
    switch (action.type) {
        case FETCH_POST_NAME:
            return { ...state, postName: action.payload };
        default:
            return state;
    }
};

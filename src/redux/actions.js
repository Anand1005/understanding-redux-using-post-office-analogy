// src/redux/actions.js

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_NAME
} from './actionTypes';

export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error
});

export const setPostName = (postName) => ({
    type: FETCH_POST_NAME,
    payload: postName
});

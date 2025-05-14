// src/redux/epics.js

import { ofType } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { FETCH_POSTS_REQUEST } from './actionTypes';
import { fetchPostsSuccess, fetchPostsFailure } from './actions';

// action$: A stream of Redux actions.
// ofType(MY_ACTION_TYPE): Filters actions so only ones of type MY_ACTION_TYPE continue down the stream.

export const fetchPostsEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_POSTS_REQUEST),
        mergeMap(() =>
            from(
                fetch('https://jsonplaceholder.typicode.com/posts').then(
                    (response) => response.json()
                )
            ).pipe(
                mergeMap((posts) => of(fetchPostsSuccess(posts))),
                catchError((error) => of(fetchPostsFailure(error.message)))
            )
        )
    );

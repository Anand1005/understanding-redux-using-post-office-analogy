// src/redux/selectors.js

export const selectPosts = (state) => state.posts.posts;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;
export const selectPostName = (state) => state.postName.postName;

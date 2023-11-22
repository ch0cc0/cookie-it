import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getRedditPosts, getSubredditPosts, getPostComments } from '../../api/reddit.js';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '',
};

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
                .showingComments;
        },
        startGetComments(state, action) {
            // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload].showingComments = !state.posts[action.payload]
                .showingComments;
            if (!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    }
});

export default redditSlice.reducer;
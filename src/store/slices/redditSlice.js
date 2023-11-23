import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    selectedSubreddit: '',
};

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
    },
});

export const { setSearchTerm, setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;
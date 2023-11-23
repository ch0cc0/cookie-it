import { configureStore } from '@reduxjs/toolkit';
//import reducers
import { redditApi } from '../api/reddit.js';
import redditReducer from './slices/redditSlice.js';

export const store = configureStore({
  reducer: {
    [redditApi.reducerPath]: redditApi.reducer,
    reddit: redditReducer,

  },
  middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(redditApi.middleware),
});
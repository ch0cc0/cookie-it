// Now using RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const redditApi = createApi({
  reducerPath: 'redditApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }),
  endpoints: (builder) => ({
    getRedditPosts: builder.query({
      query: () => '/.json?limit=30',
      transformResponse: (response) => {
        return response.data.children.map((post) => post.data);
        },
    }),
    getSubreddits: builder.query({
      query: () => '/subreddits.json',
      transformResponse: (response) => {
        return response.data.children.map((subreddit) => subreddit.data);
        },
    }),
    getSubredditPosts: builder.query({
      query: (subreddit) => `/r/${subreddit}.json?limit=30`,
      transformResponse: (response) => {
        return response.data.children.map((post) => post.data);
        },
    }),
    getPostComments: builder.query({
      query: (permalink) => `${permalink}.json`,
      transformResponse: (response) => {
        return response[1].data.children.map((comment) => comment.data);
        },
    }),
  }),
});

export const { 
  useGetRedditPostsQuery, 
  useGetSubredditsQuery, 
  useGetSubredditPostsQuery, 
  useGetPostCommentsQuery 
} = redditApi;
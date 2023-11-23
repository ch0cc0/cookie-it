import React from 'react';
import Posts from '../Posts';
import Loading from '../../components/Loading/LoadingPosts/index.jsx';
import { useGetSubredditPostsQuery } from '../../api/reddit.js';
import { useParams } from 'react-router-dom';

function SearchResults() {
    const { subreddit } = useParams();
    const { data: posts, error, isLoading } = useGetSubredditPostsQuery(subreddit);
    
    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <Loading />;
    
    return <Posts className='flex flex-col items-center' posts={posts || []} />;
}

export default SearchResults;
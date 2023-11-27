import React from 'react';
import Posts from '../Posts';
import Loading from '../../components/Loading/LoadingPosts/index.jsx';
import { useGetRedditPostsQuery } from '../../api/reddit.js';

function HomeFeed() {
    const { data: posts, error, isLoading } = useGetRedditPostsQuery();

    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <Loading />;

    return (
    <Posts className='flex flex-col items-center' posts={posts || []} />
    );
}

export default HomeFeed;
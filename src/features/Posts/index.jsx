import React from 'react';
import PostCard from '../../components/PostCard'

function Posts({className, posts}) {

  function getPostImageUrl(post) {
    // Check if the URL is a direct link to an image
    if (post.url && /\.(jpg|jpeg|png|gif)$/.test(post.url)) {
        return post.url;
    }

    // Fallback to thumbnail if the URL isn't a direct image link
    if (post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default') {
        return post.thumbnail;
    }

    // Fallback to a placeholder image
    return '../../media/cookie-placeholder.svg'; 
}

    return (
      <div class='flex flex-col m-3 space-y-5	items-center'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} getPostImageUrl={getPostImageUrl}/>
        ))}
      </div>
    );
  }
  
  export default Posts;
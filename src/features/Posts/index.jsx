import React from 'react';
import PostCard from '../../components/PostCard'
import htmlUnescape from '../../helperFunctions/Unescape';

function Posts({posts}) {

  function getPostMedia(post) {

    // Check for a video URL in different formats
    if (post.is_video && post.media && post.media.reddit_video) {
      const videoUrl = post.media.reddit_video.fallback_url;
      return videoUrl.includes('DASH') ? videoUrl.split('?')[0] : videoUrl;
    }

    // Check if the URL is a direct link to an image
    if (post.url && /\.(jpg|jpeg|png|gif)$/.test(post.url)) {
        return post.url;
    }

    // Check for a preview image
    if (post.preview && post.preview.images && post.preview.images[0] && post.preview.images[0].source.url) {
      return htmlUnescape(post.preview.images[0].source.url);
    }

    // Fallback to thumbnail if the URL isn't a direct image link
    if (post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default') {
        return post.thumbnail;
    }

    return false; 
}

    return (
      <div class='flex flex-col h-[100vh] w-[99vw] overflow-y-scroll m-4 mt-14 space-y-5	items-center snap-y snap-proximity'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} getPostMedia={getPostMedia}/>
        ))}
      </div>
    );
  }
  
  export default Posts;
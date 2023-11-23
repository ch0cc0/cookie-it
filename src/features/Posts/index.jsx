import React from 'react';
import PostCard from '../../components/PostCard'
import getPostMedia from '../../helperFunctions/getPostMedia';

function Posts({posts}) {

    return (
      <div class='flex flex-col h-[100vh] w-[99vw] overflow-y-scroll m-4 mt-14 space-y-5	items-center snap-y snap-proximity'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} getPostMedia={getPostMedia}/>
        ))}
      </div>
    );
  }
  
  export default Posts;
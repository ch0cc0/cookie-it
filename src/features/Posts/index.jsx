import React from 'react';
import Card from '../../components/Card'

function Posts({className, posts}) {
    return (
      <div className={className}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  }
  
  export default Posts;
import React from 'react';
import './Card.css';


function Card({post}) {
    return (
      <div className='card-wrapper'>
        <div className='card-secondary-wrapper'>
            <div className='card-title'>
                {post.title}
            </div>
            <div className='card-post-wrap'>
                <div className='card-img'>
                    <img src={post.url} alt={post.title} />
                </div>
                <div className='card-sidebar'>
                    <ul>
                        <li>{post.ups}</li>
                        <li>{post.num_comments}</li>
                    </ul>
                </div>
            </div>
            <div className='card-details'>
                {post.author}
            </div>
        </div>
        <div className='avatar'>

        </div>
      </div>
    );
  }
  
  export default Card;
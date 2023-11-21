import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from "react-icons/bi";

function Card({post}) {

    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);
    const [isCommentsExpanded, setIsCommentsExpanded] = useState(false);

    const toggleUpvote = () => {
        setIsUpvoted(!isUpvoted);
        if (isDownvoted) setIsDownvoted(false);
    };

    const toggleDownvote = () => {
        setIsDownvoted(!isDownvoted);
        if (isUpvoted) setIsUpvoted(false);
    };

    const toggleExpandComments = () => {
        setIsCommentsExpanded(!isCommentsExpanded);
    };

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
                    <div className='votes'>
                        <button className='sidebar-icon'
                        style={{ color: isUpvoted ? 'orange' : 'black' , backgroundColor: isUpvoted ? 'black' : 'grey'}}
                        onClick={toggleUpvote}>
                            <BiUpvote size='26px' /></button>
                            <p>{post.ups}</p>
                        <button className='sidebar-icon'
                        style={{ color: isDownvoted ? 'orange' : 'black' , backgroundColor: isDownvoted ? 'black' : 'grey'}}
                        onClick={toggleDownvote}>
                            <BiDownvote size='26px' />
                        </button>
                    </div>
                    <div className='comments'>
                        <button className='sidebar-icon'
                        style={{ color: isCommentsExpanded ? 'orange' : 'black' , backgroundColor: isCommentsExpanded ? 'black' : 'grey'}}
                        onClick={toggleExpandComments}>
                            <FontAwesomeIcon icon={faComments}  />
                        </button>
                        <p>{post.num_comments}</p>
                    </div>
                    
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
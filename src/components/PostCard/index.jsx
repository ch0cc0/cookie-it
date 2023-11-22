import React, { useState } from 'react';
import './PostCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from "react-icons/bi";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"


function PostCard({post, getPostImageUrl}) {

    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);
    const [isCommentsExpanded, setIsCommentsExpanded] = useState(false);

    const imageUrl = getPostImageUrl(post)

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
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.selftext}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={imageUrl} />
            </CardContent>
            <CardFooter>
                <p>{post.author}</p>
            </CardFooter>
      </Card>      
    );
  }
  
  export default PostCard;
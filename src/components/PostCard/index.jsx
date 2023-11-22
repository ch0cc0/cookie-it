import React, { useState } from 'react';
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


function PostCard({post, getPostMedia}) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    const media = getPostMedia(post)

    return (
        <Card class="m-4 hover:shadow-2xl shadow-slate-500/50 hover:bg-[#F1D4E5] w-64 md:w-96 lg:w-2/6 bg-[#FCE9F1] rounded-md">
            <CardHeader bg-slate-500>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription class={`cursor-pointer ${isDescriptionExpanded ? '' : 'line-clamp-3 overflow-hidden'}`} onClick={toggleDescription}>{post.selftext}</CardDescription>
            </CardHeader>
            <CardContent bg-slate-500>
                {media && /\.(mp4|webm)$/.test(media) ? (
                    <video class="w-full h-50 object-cover" controls src={media} />
                ) : (
                    media ? <img class="w-full h-50 object-cover" src={media} alt={post.title} /> : null
                )}
            </CardContent>
            <CardFooter>
                <p>{post.author}</p>
            </CardFooter>
      </Card>      
    );
  }
  
  export default PostCard;
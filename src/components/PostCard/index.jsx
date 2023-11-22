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

    const imageUrl = getPostImageUrl(post)

    return (
        <Card class="m-4 hover:shadow-2xl hover:bg-zinc-300 w-64 md:w-96 lg:w-2/6 bg-zinc-200 rounded-md">
            <CardHeader bg-slate-500>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription class="line-clamp-3 overflow-hidden">{post.selftext}</CardDescription>
            </CardHeader>
            <CardContent bg-slate-500>
                <img class="w-full h-50 object-cover" src={imageUrl} />
            </CardContent>
            <CardFooter>
                <p>{post.author}</p>
            </CardFooter>
      </Card>      
    );
  }
  
  export default PostCard;
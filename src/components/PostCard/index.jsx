import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
        <Card class="snap-center select-none m-4 hover:shadow-2xl shadow-slate-500/50 hover:bg-[#F1D4E5] w-64 md:w-96 lg:w-2/6 bg-[#FCE9F1] rounded-2xl">
            <CardHeader >
                <CardTitle class="bg-[#e4bdec] rounded-md mx-2 mt-2 p-2 font-bold md:text-xl">{post.title}</CardTitle>
                <CardDescription class={`cursor-pointer ${isDescriptionExpanded ? '' : 'line-clamp-3 overflow-hidden'} ${post.selftext ? 'mx-2 p-2' : ''} break-words `} onClick={toggleDescription}>
                    {post.selftext}
                </CardDescription>
            </CardHeader>
            <CardContent >
                {media && /\.(mp4|webm)$/.test(media) ? (
                    <video class="w-full h-50 object-cover" controls src={media} />
                ) : (
                    media ? <img class="w-full h-50 object-cover" src={media} alt={post.title} /> : null
                )}
            </CardContent>
            <CardFooter class="flex mb-2 ml-2 space-x-10">
                <p class="bg-white rounded-lg p-0.5 shadow-xl font-semibold">{post.author}</p>
            </CardFooter>
      </Card>      
    );
}
  
  export default PostCard;
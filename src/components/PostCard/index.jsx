import React, { useEffect, useState } from 'react';
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
  } from "../ui/card";
import Comment from '../Comment';
import LoadingComments from '../Loading/LoadingComments/index.jsx';
import { useGetPostCommentsQuery } from "../../api/reddit.js";


function PostCard({post, getPostMedia}) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    const [showComments, toggleShowComments] = useState(false);

    const { data: comments, isLoading: isLoadingComments } = useGetPostCommentsQuery(post.permalink, {
        skip: !showComments, // Skip fetching comments until showComments is true
    });

    const media = getPostMedia(post)

    const [pulse, setPulse] = useState('');

    const handleClick = () => {
        toggleShowComments(!showComments);

        setPulse('animate-ping');

        setTimeout(() => {
            setPulse('');
        }, 1000);
    };

    return (
        <Card className="snap-center select-none m-4 hover:shadow-2xl shadow-slate-500/50 hover:bg-[#F1D4E5] w-64 md:w-96 lg:w-2/6 bg-[#FCE9F1] rounded-2xl">
            <CardHeader >
                <CardTitle className="bg-[#e4bdec] rounded-md mx-2 mt-2 p-2 font-bold md:text-xl">{post.title}</CardTitle>
                <CardDescription className={`cursor-pointer ${isDescriptionExpanded ? '' : 'line-clamp-3 overflow-hidden'} ${post.selftext ? 'mx-2 p-2' : ''} break-words `} onClick={toggleDescription}>
                    {post.selftext}
                </CardDescription>
            </CardHeader>
            <CardContent >
                {media && /\.(mp4|webm)$/.test(media) ? (
                    <video className="w-full h-50 object-cover" controls src={media} />
                ) : (
                    media ? <img className="w-full h-50 object-cover" src={media} alt={post.title} /> : null
                )}
            </CardContent>
            <CardFooter className="flex mb-2 ml-2 space-x-10">
                <p className="bg-white rounded-lg p-0.5 shadow-xl font-semibold">{post.author}</p>
                <button onClick={handleClick} className={`${pulse} flex space-x-1 rounded-full w-auto h-auto p-1 m-0 bg-[#88d8ec]`}>
                    <FontAwesomeIcon className='ml-1 mt-1' icon={faComments}></FontAwesomeIcon>
                    <p className='text-white font-semibold'>{post.num_comments}</p>
                </button>
            </CardFooter>
            { showComments && (isLoadingComments ? <LoadingComments /> :
                (comments || []).map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                )))
             }    
      </Card>      
    );
}
  
  export default PostCard;
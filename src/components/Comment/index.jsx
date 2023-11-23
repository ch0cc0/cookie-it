import React from 'react';
import {
    Card,
    CardContent,
    CardTitle,
  } from "../ui/card";


function Comment({comment}) {

    console.log(comment);

    return (
        <Card className="m-1 bg-[#88d8ec]">
            <CardTitle className="text-white bg-black rounded-lg p-1 text-sm">{comment.author}</CardTitle>
            <CardContent className="mt-2 mb-0 pb-2">{comment.body}</CardContent>
        </Card>      
    );
}
  
  export default Comment;
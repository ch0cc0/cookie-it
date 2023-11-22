import React from 'react';
import { Skeleton } from "../ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "../ui/card"

function Loading() {

    return (
        <div class='flex flex-col items-center'>
            {Array.from({length: 15}, (_, i) => i + 1).map(id => 
            <Card key={id} class="m-4 mt-18 hover:bg-[#C683D7] w-64 md:w-96 lg:w-2/6 bg-[#ED9ED6] rounded-md">
                <CardHeader >
                    <Skeleton class="h-6 w-1/2 bg-gray-300 rounded-md" ></Skeleton>
                    <CardDescription class="line-clamp-3 overflow-hidden"></CardDescription>
                </CardHeader>
                <CardContent >
                    <Skeleton class="h-64 w-5/6 bg-gray-300 rounded-md" ></Skeleton>
                </CardContent>
            </Card> 
            )}
        </div>     
    );
  }
  
  export default Loading;
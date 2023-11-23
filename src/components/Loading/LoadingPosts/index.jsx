import React from 'react';
import { Skeleton } from "../../ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "../../ui/card"

function Loading() {

    return (
        <div class='flex flex-col items-center mt-14'>
            {Array.from({length: 15}, (_, i) => i + 1).map(id => 
            <Card key={id} class="m-4 mt-18 hover:bg-[#F1D4E5] w-64 md:w-96 lg:w-2/6 bg-[#FCE9F1] rounded-md">
                <CardHeader >
                    <Skeleton class="animate-pulse h-6 w-1/2 bg-gray-300 rounded-md" ></Skeleton>
                    <CardDescription class="line-clamp-3 overflow-hidden"></CardDescription>
                </CardHeader>
                <CardContent >
                    <Skeleton class="animate-pulse h-64 w-5/6 bg-gray-300 rounded-md" ></Skeleton>
                </CardContent>
            </Card> 
            )}
        </div>     
    );
  }
  
  export default Loading;
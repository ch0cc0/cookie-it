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
            <Card key={id} class="m-4 mt-18 hover:shadow-2xl hover:bg-zinc-300 w-64 md:w-96 lg:w-2/6 bg-zinc-200 rounded-md">
                <CardHeader >
                    <Skeleton class="h-6 w-1/2 bg-gray-400 rounded-md" ></Skeleton>
                    <CardDescription class="line-clamp-3 overflow-hidden"></CardDescription>
                </CardHeader>
                <CardContent >
                    <Skeleton class="h-64 w-5/6 bg-gray-400 rounded-md" ></Skeleton>
                </CardContent>
            </Card> 
            )}
        </div>     
    );
  }
  
  export default Loading;
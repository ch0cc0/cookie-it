import React from 'react';
import { Skeleton } from "../../ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "../../ui/card"

function LoadingComments() {

    return (
        <div class='flex flex-col items-center mt-14'>
            {Array.from({length: 3}, (_, i) => i + 1).map(id => 
            <Card className="m-3 w-64 md:w-96 bg-[#88d8ec]">
                <Skeleton className="animate-pulse h-2 w-24 m-2 bg-gray-300 rounded-md " />
                <Skeleton className="animate-pulse h-6 w-58 m-2 bg-gray-300 rounded-md" />
            </Card>   
            )}
        </div>     
    );
  }
  
  export default LoadingComments;
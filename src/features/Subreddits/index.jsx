import React from 'react';
import { useGetSubredditsQuery } from '../../api/reddit.js';
import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardHeader
  } from "../../components/ui/card";

function Subreddits() {
    const navigate = useNavigate();

    const { data: subreddits, error, isLoading } = useGetSubredditsQuery();

    const goToSubreddit  = (subredditPath) => {
        navigate(`/r/${subredditPath}`);
    };

    if (error) return <div>Error: {error.message}</div>;

    return (
        <Card className="hidden lg:block h-[80vh] min-w-max w-auto absolute top-28 left-16 hover:bg-[#F1D4E5] bg-[#FCE9F1]">
            <CardHeader className="">Subreddits</CardHeader>
            <CardContent className="custom-scrollbar flex flex-col justify-start gap-y-3 overflow-y-auto max-h-[calc(80vh-5rem)]">
                {(subreddits || []).map((subreddit) => (
                    <button className="flex items-center gap-x-2" onClick={() => goToSubreddit(subreddit.display_name)}>
                    <img src={ subreddit.icon_img || `https://ui-avatars.com/api/?name=${encodeURIComponent(subreddit.display_name)}`}
                    alt={`${subreddit.display_name}`}
                    className="rounded-full w-12 h-12" />
                {subreddit.display_name}
                </button>
                ))}
            </CardContent>
        </Card>
    );
}

export default Subreddits;
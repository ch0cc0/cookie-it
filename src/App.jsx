import React, { useEffect, useState } from 'react';
import NavBar from './features/NavBar';
import Posts from './features/Posts';
import PostDetailPage from './features/PostDetailPage';
import Loading from './components/Loading';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getRedditPosts, getSubreddits, getSubredditPosts, getPostComments } from './api/reddit';

function App() {

  const [redditPosts, setRedditPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRedditPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await getRedditPosts();
        setRedditPosts(posts);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
      setIsLoading(false);
    };

    fetchRedditPosts();
  }, []);


  return (
    <div className="App">
      <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={isLoading ? <Loading /> : <Posts class='flex flex-col items-center' posts={redditPosts}/>} />
              <Route path="/posts/:postId" element={<PostDetailPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

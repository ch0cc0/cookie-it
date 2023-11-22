import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './features/NavBar';
import Posts from './features/Posts';
import PostDetailPage from './features/PostDetailPage';
import logo from './media/placeholder.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getRedditPosts, getSubreddits, getSubredditPosts, getPostComments } from './api/reddit';

const templatePosts = [
  {
    id: 1,
    title: 'Cookies I Like',
    url: logo,
    author: 'FunckyMonkey',
    ups: 123023,
    num_comments: 23,
  },
  {
    id: 2,
    title: 'I LOVE COOKIES',
    url: logo,
    author: 'CookieCow',
    ups: 4523,
    num_comments: 2,
  },
  {
    id: 3,
    title: 'I hate these cookies',
    url: logo,
    author: 'IHateCookies',
    ups: 1,
    num_comments: 0,
  }
]

function App() {

  const [redditPosts, setRedditPosts] = useState([]);

  useEffect(() => {
    const fetchRedditPosts = async () => {
      const posts = await getRedditPosts(); // Add your subreddit parameter
      setRedditPosts(posts);
    };

    fetchRedditPosts();
  }, []);


  return (
    <div className="App">
      <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Posts className='posts' posts={redditPosts}/>} />
              <Route path="/posts/:postId" element={<PostDetailPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

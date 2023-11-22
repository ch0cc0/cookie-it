import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './features/NavBar';
import Posts from './features/Posts';
import PostDetailPage from './features/PostDetailPage';
import logo from './media/placeholder.png';
import Loading from './components/Loading';
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

import React from 'react';
import './App.css';
import NavBar from './features/NavBar';
import Posts from './features/Posts';
import PostDetailPage from './features/PostDetailPage';
import logo from './media/placeholder.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
  return (
    <div className="App">
      <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Posts className='posts' posts={templatePosts}/>} />
              <Route path="/posts/:postId" element={<PostDetailPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

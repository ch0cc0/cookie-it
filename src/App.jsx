import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import PostDetailPage from './components/PostDetailPage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/posts/:postId" element={<PostDetailPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

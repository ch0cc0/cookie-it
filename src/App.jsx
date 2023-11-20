import React from 'react';
import './App.css';
import NavBar from './features/NavBar';
import Posts from './features/Posts';
import PostDetailPage from './features/PostDetailPage';

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

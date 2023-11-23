import React from 'react';
import NavBar from './features/NavBar';
import PostDetailPage from './features/PostDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeFeed from './features/HomeFeed';
import SearchResults from './features/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeFeed />} />
              <Route path="/search/r/:subreddit" element={<SearchResults />} />
              <Route path="/posts/:postId" element={<PostDetailPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

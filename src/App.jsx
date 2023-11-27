import React from 'react';
import NavBar from './features/NavBar';
import Subreddits from './features/Subreddits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeFeed from './features/HomeFeed';
import SearchResults from './features/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
            <NavBar />
            <Subreddits />
            <Routes>
              <Route path="/" element={<HomeFeed />} />
              <Route path="/r/:subreddit" element={<SearchResults />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

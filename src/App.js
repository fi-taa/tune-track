import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongList from './features/songList/SongList';
import NavBar from './features/songList/NavBar';

function App() {
  return (
    <div>
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<SongList />} />
        </Routes>
    </Router>
    </div>

  );
}

export default App;

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SongList from './features/songList/SongList';
import NavBar from './components/NavBar';
import SongList from './redux/songList/index';
function App() {


  return (
    <Router>
      <div>
        <NavBar  />
        <Routes>
          <Route exact path="/" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

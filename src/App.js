// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongList from './features/songList/SongList';
import NavBar from './components/NavBar';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div>
        <NavBar onButtonClick={handleModalOpen} />
        <Routes>
          <Route exact path="/" element={<SongList />} />
        </Routes>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <h2>Modal Content</h2>
            <p>Hello! I am a modal.</p>
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;

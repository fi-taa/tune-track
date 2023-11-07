import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 w-96">
  <nav className="flex items-center  justify-between bg-gray-800 text-white p-4 w-full">
    <div className="text-3xl font-bold flex">Tune-Track</div>
    <button
      onClick={handleOpenModal}
      className="px-4 py-2 bg-[#27323e] text-white rounded hover:bg-white hover:text-[#27323e] transition duration-300"
    >
      About
    </button>
  </nav>
  <Modal open={showModal} onClose={handleCloseModal}>
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-2xl p-6 sm:p-8 w-full max-w-[40rem] overflow-y-auto max-h-[36rem]">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">About Tune-Track</h2>
    <p className="text-base sm:text-lg mb-4">
      <b>Tune-Track</b> is a cutting-edge music application designed to showcase a list of songs and provide clients with the ability to create, update, and delete songs. The app is built using <i>ReactJS</i>, managed with <i>Redux Toolkit</i> and <i>Redux-Saga</i>, and styled using <i>Emotion</i> and <i>Styled System</i>.
    </p>
    <p className="text-base sm:text-lg mb-4">
      Developed as a part of the <i>Addis Software Test Project</i>, <b>Tune-Track</b> demonstrates the ability of the frontend developer to integrate a mock REST API with the frontend to create a full-stack application. The application is deployed on <i>Vercel</i>, fulfilling the bonus requirement of the project.
    </p>
    <p className="text-base sm:text-lg mb-4">
      This project emphasizes the use of modern web technologies to create an intuitive and engaging user interface for music enthusiasts. By following the instructions and leveraging the recommended technologies, <b>Tune-Track</b> provides a seamless and enjoyable music discovery and management experience.
    </p>
    <p className="text-base sm:text-lg mb-4">
      The project is publicly accessible on <i>Vercel</i> 
      <a href="https://tune-track.vercel.app/" className="text-blue-500 hover:text-[#27323e] transition duration-300">
        <i> Tune-Track</i>
      </a>, and the complete source code can be found in the public Git repository 
      <a href="https://github.com/fi-taa/tune-track" className="text-blue-500 hover:text-[#27323e] transition duration-300">
        <i> GitHub | Tune-Track</i>
      </a>.
    </p>
    <button
      onClick={handleCloseModal}
      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-[#27323e] transition duration-300 w-full mt-4"
    >
      Close
    </button>
  </div>
</Modal>


    </div>
  );
};

export default NavBar;

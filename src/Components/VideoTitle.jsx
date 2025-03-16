import React, { useState } from "react";
import MoreInfo from "./MoreInfo"; // Import the modal component
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, id, poster_path, release_date, vote_average }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick =() =>{
    navigate("/movie/" + id);
  }
  const movie = {
    id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
  };

  const handleMoreInfoClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6  w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
      <button
      className=" bg-white text-black  md:py-4 px-3 md:px-12 font-bold text-xl rounded-lg hover:bg-gray-600 cursor-pointer"
      onClick={handleClick}
    >
    🎬 Play
    </button>
    
        <button
          className="hidden md:inline-block mx-2 p-4 bg-white text-black font-bold px-12 text-xl rounded-lg hover:bg-gray-400 cursor-pointer"
          onClick={handleMoreInfoClick}
        >
        🛈 More Info
        </button>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && <MoreInfo movie={movie} onClose={handleCloseModal} />}
    </div>
  );
};

export default VideoTitle;

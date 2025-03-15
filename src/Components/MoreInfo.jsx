import React from "react";
import { useNavigate } from "react-router-dom";

const MoreInfo = ({ movie, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose(); // Close the modal when clicked outside or on the close button
  };

  const handlePlay = () => {
    navigate("/movie/" + movie.id); // Navigate to the movie page when clicked
    onClose(); // Close the modal after navigating
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white p-8 rounded-lg w-[80%] max-w-3xl relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white font-bold text-xl cursor-pointer"
        >
          X
        </button>
        <div className="flex">
          <img
            className="w-48 h-72 object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="ml-6 flex-1">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <p className="text-lg mt-2">{movie.overview}</p>
            <p className="mt-4 text-sm text-gray-400">Release Date: {movie.release_date}</p>
            <p className="mt-2 text-sm text-gray-400">Vote Average: {movie.vote_average}</p>
            <div className="mt-4">
              <button
                className="p-4 bg-white text-black font-bold px-12 text-xl rounded-lg hover:bg-gray-300 cursor-pointer"
                onClick={handlePlay}
              >
                ▶ Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

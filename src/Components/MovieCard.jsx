import React from "react";
import { Image_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  if (!posterPath) return null;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/movie/' + id)
  }
  return (
    <div className="w-25 md:w-48 relative flex-none group" onClick={handleClick}>
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={`${Image_CDN}${posterPath}`}
        alt="Movie Poster"
        
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer">
        <span className="text-white text-xl font-bold ">▶ Play</span>
      </div>
    </div>
  );
};

export default MovieCard;

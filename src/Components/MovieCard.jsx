import React from 'react'
import { Image_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img className="px-1" src={`${Image_CDN}${posterPath}`} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;

   
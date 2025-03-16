import React from 'react';
import { useSelector } from 'react-redux';
import useMovieVideo from '../Hooks/useMovieVideo';
import useMovieData from '../Hooks/useMovieData';
import MovieDetails from './MovieDetails'; // Import the new MovieDetails component

const VideoPlay = ({ movieid }) => {
  // Fetch movie trailer using movieid
  useMovieVideo(movieid);
  useMovieData(movieid);

  // Get trailerId and movie data from Redux store
  const trailerId = useSelector(store => store?.movies?.addVideo?.key);
  const movieData = useSelector(store => store?.movies?.addData);


  // Fetch the movie details based on the movieid
  const data = useSelector((store) => {
    const id = Number(movieid); // Convert to number for comparison

    return (
      store.movies?.addNowPlayingMovies?.find((movie) => movie.id === id) ||
      store.movies?.addPopularMovies?.find((movie) => movie.id === id) ||
      store.movies?.addTopRated?.find((movie) => movie.id === id) ||
      store.movies?.addUpcoming?.find((movie) => movie.id === id) ||
      store.gpt?.movieResults?.flat()?.find((movie) => movie.id === id)
    );
  });

  return (
    <div className="relative bg-black text-white">
      {/* Full-screen Video */}
      <div className="w-full h-screen relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&controls=1&rel=0&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Movie Details Layout */}
      <div className="flex bg-black text-white py-6 px-8">
        {/* Movie Data */}
        <MovieDetails data={data} />
      </div>
    </div>
  );
};

export default VideoPlay;

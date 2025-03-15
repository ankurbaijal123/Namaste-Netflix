import { useSelector } from 'react-redux';
import useMovieVideo from '../Hooks/useMovieVideo';

const VideoPlay = ({ movieid }) => {
  // Fetch movie trailer using movieid
  useMovieVideo(movieid);


  // Get trailerId from Redux store
  const trailerId = useSelector(store => store?.movies?.addVideo?.key);
  
  // Fetch the movie details based on the movieid
  const data = useSelector((store) => {
    const id = Number(movieid); // Convert to number for comparison
    if (!store.movies) return null; // Prevent errors if movies is undefined

    return (
      store.movies?.addNowPlayingMovies?.find((movie) => movie.id === id) ||
      store.movies?.addPopularMovies?.find((movie) => movie.id === id) ||
      store.movies?.addTopRated?.find((movie) => movie.id === id) ||
      store.movies?.addUpcoming?.find((movie) => movie.id === id) ||
      store.gpt?.movieResults?.flat()?.find((movie) => movie.id === id)

    );
  });


  return (
    <div className="relative h-screen bg-black text-white">
      {/* Full-screen Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&controls=1&rel=0&modestbranding=1&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Movie Details Overlay */}
      <div className="absolute top-1/4 left-10 z-10 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{data?.title || 'Movie Not Found'}</h1>
        <p className="text-lg mb-4">{data?.overview || 'No description available.'}</p>
        
      </div>
    </div>
  );
};

export default VideoPlay;

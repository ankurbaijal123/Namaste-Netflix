import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';
const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId)
    const trailerId = useSelector(store => store?.movies?.addTrailerVideo?.key);
    console.log("https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0")
  return (  
    <div className=" ">
    <iframe 
    className="w-screen aspect-video"
    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
  
  
    </div>
  );
};

export default VideoBackground;

import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Shimmer from './Shimmer'
const MainContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies)
    if(!movies) return (
      null
    )
    const mainmovie = movies[0];
    const { original_title, overview, id, poster_path, release_date, vote_average } = mainmovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={original_title}
        overview={overview}
        id={id}
        poster_path={poster_path}
        release_date={release_date}
        vote_average={vote_average}
      />
    <VideoBackground movieId={id}/>  
    </div>
  ) 
}

export default MainContainer
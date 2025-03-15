import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies?.addNowPlayingMovies)
  const popularMovies = useSelector(store => store.movies?.addPopularMovies)
  const topRated = useSelector(store => store.movies?.addTopRated)
  const upComing = useSelector(store => store.movies?.addUpcoming)
  return (
    <div className=" bg-black">
    <div className="-mt-30 pl-12 relative z-10">
    <MovieList title={"Now Playing"} movies={movies}/>
    <MovieList title={"Popular"} movies={popularMovies}/>
    <MovieList title={"Top Rated"} movies={topRated}/>
    <MovieList title={"Upcoming"} movies={upComing}/>
  
    </div>
    {/*  
      MovieList - Popular
      MovieList - NowPlaying
      MovieList - Trending
      MovieList - Horror Movies
      MovieList - Romantic
      
      */}</div>
  )
}

export default SecondaryContainer
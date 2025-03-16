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
    <div className="mt-0 md:-mt-30 pl-4 md:pl-12 relative z-10">
  <MovieList title={"Now Playing"} movies={movies} cardClass="sm:w-40 md:w-64" />
  <MovieList title={"Popular"} movies={popularMovies} cardClass="sm:w-40 md:w-64" />
  <MovieList title={"Top Rated"} movies={topRated} cardClass="sm:w-40 md:w-64" />
  <MovieList title={"Upcoming"} movies={upComing} cardClass="sm:w-40 md:w-64" />
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
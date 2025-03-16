import React from 'react'
import { useSelector } from 'react-redux'
import shimmer from './Shimmer'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt)
  const {searchedText, movieResults, movieNames} = gpt; 
  if(!movieNames) return <shimmer />
  return (
    <div className="p-4 m-4 text-white bg-black/90">
    <div>
    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
  Searched : {searchedText}
</h1>

    </div>
    <div>                
      {movieNames.map((movieName, i) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[i]} />
      ))}
    </div>

    </div>
  ) 
}

export default GptMovieSuggestions
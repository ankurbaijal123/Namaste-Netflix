import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { background } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>{/* Gpt Search Bar 
        Gpt Movie Suggestion */}
        <div className="fixed -z-10">
                <img
                  src={background}
                  alt="background"
                ></img>
              </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
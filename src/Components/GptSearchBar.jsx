import React, { useState, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const [Searchresult, setSearchresult] = useState(null);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery = `
      Act as a Movie Recommendation System and suggest some movies for the query "${searchText.current.value}".
      Only give me names of 5 movies, including Indian Bollywood movies, comma-separated.
      Example Result: Chawa, Sholay, Dom, 3 Idiots, Hum Aapke Hain Kaun.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(gptQuery);
    setSearchresult(result.response.text());

    if (Searchresult === null) return <Shimmer />;

    const gptMovies = Searchresult.split(", ");
    const eachMoviePromise = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(eachMoviePromise);

    dispatch(
      addGptMovieResult({
        searchedText: searchText.current.value,
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  const movies = useSelector((store) => store.gpt?.gptMovies);
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[60%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black p-4 md:p-6 rounded-lg shadow-md grid grid-cols-12 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
      
        <input
          ref={searchText}
          type="text"
          className="p-3 md:p-4 m-2 md:m-4 col-span-9 border border-gray-500 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang?.[language].gptSearchPlaceHolder}
        />

       
        <button
          className="col-span-3 m-2 md:m-4 py-3 px-4 bg-red-600 rounded-md text-white font-medium hover:bg-red-700 transition-all duration-300 cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          {lang?.[language].search} 🔍
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

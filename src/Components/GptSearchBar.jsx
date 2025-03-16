import React, { use, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import client from "../utils/openAI";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const [Searchresult, setSearchresult] = useState(null);
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movie for the query" +
      searchText.current.value +
      "only give me names of 5 Movies include Indian Bollywod Movies, comma seperated like the example result given ahead . Example Result: Chawa, Sholay, Dom, 3 Idiots, Ham Aapke hai kon";
    //Make an api call to open ai to get Movie Results
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(gptQuery);
    setSearchresult(result.response.text());

    if (Searchresult === null) {
      //error handling
      <Shimmer />
    }
    const gptMovies = Searchresult.split(", ");
    // for each movie search TMDB API
    

    const eachMoviePromise = gptMovies.map((movie) =>
      searchMovieTMDB(movie)
      //will get array of promises
      //[Promise,Promise,Promise,Promise,Promise]
    );
    const tmdbResults = await Promise.all(eachMoviePromise);
    dispatch(addGptMovieResult({searchedText: searchText.current.value, movieNames : gptMovies, movieResults : tmdbResults}))
  };
  const movies = useSelector(store => store.gpt?.gptMovies)

  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[50%] md:pt-[8%] flex justify-center">

      <form
        className="w-97 md:w-1/2 bg-black grid grid-cols-12 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 border border-gray-300"
          placeholder={lang?.[language].gptSearchPlaceHolder} 
        ></input>

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 rounded-3xl text-white cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          {lang?.[language].search} 🔍︎
        </button>
      </form>

     
      
    </div>
  );
};

export default GptSearchBar;

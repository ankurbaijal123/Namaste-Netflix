import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { background } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      {/* Background Image */}
      <div className="fixed -z-10 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={background}
          alt="background"
        />
      </div>
 
      {/* Main Content */}
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;

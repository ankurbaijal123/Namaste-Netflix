import React from 'react'
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from '../utils/movieSlice';
const useMovieVideo = (movieid) => {
   const dispatch = useDispatch()
    useEffect(() => {
      getVideoTrailer();
    }, []);
  
    const getVideoTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieid +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results?.filter((video) => video.type === "Trailer");
      const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
      dispatch(addVideo(trailer))
  
    };
  
  
   
  
}

export default useMovieVideo
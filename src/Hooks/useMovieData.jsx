import React from 'react'
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from '../utils/movieSlice';
import { addData } from '../utils/movieSlice';
const useMovieData = (movieid) => {
   const dispatch = useDispatch()
    useEffect(() => {
      getVideoData();
    }, []);
  
    const getVideoData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieid +
          "?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      
      dispatch(addData(json))
  
    };
  
  
   
  
}

export default useMovieData
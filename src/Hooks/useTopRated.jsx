import React from 'react'
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addTopRated} from "../utils/movieSlice"; 
const useTopRated = () => {
  const [movieData, setMovieData] = useState(null)
  const dispatch = useDispatch();
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const json = await data.json();
      setMovieData(json.results)
      
  }
  
    dispatch(addTopRated(movieData))
    };
  
  
   
  


export default useTopRated
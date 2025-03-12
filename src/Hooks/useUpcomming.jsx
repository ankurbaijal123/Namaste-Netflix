import React from 'react'
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addUpcoming} from "../utils/movieSlice"; 
const useUpcomming = () => {
  const [movieData, setMovieData] = useState(null)
  const dispatch = useDispatch();
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();
      setMovieData(json.results)
      
  }
  
    dispatch(addUpcoming(movieData))
    };
  
  
   
  


export default useUpcomming
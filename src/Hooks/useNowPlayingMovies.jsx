import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useState, useEffect } from 'react'
const useNowPlayingMovies = () =>{
    const [movieData, setMovieData] = useState(null)
    const dispatch = useDispatch();

    useEffect( () =>{
        getNowPlayingMovies() 
    },[])

    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        setMovieData(json.results)
        
    }
    dispatch(addNowPlayingMovies(movieData))
}
export default useNowPlayingMovies;
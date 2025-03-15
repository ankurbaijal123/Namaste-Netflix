import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useState, useEffect } from 'react'
const usePopularMovies = () =>{
    const [movieData, setMovieData] = useState(null)
    const dispatch = useDispatch();
    const PopularMovies = useSelector(store => store.movies.addPopularMovies)
    useEffect( () =>{
        !PopularMovies && getNowPlayingMovies() 
    },[])

    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json();
        setMovieData(json.results)
        
    }
    dispatch(addPopularMovies(movieData))
}
export default usePopularMovies;
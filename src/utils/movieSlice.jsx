import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies : null,
        addTrailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.addNowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) =>{
            state.addTrailerVideo = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.addPopularMovies = action.payload;
        },
        addTopRated : (state, action) =>{
            state.addTopRated = action.payload;
        },
        addUpcoming : (state, action) =>{
            state.addUpcoming = action.payload;
        },
    }
})


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcoming} = movieSlice.actions
export default movieSlice.reducer
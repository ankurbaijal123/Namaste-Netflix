import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies : null,
        addTrailerVideo : null,
        addVideo : null,
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
        addVideo : (state, action) =>{
            state.addVideo = action.payload;
        },
    }
})


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcoming, addVideo} = movieSlice.actions
export default movieSlice.reducer
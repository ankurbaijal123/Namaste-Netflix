import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GPT Search",
    initialState : {
        showGptSearch : false,
        searchedText : null,
        movieNames : null,
        movieResults : null,

    },
    reducers: {
        toggleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) =>{
            const{searchedText, movieNames, movieResults} = action.payload
            state.searchedText = searchedText
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    },
})

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;
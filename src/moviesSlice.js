import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movieList: []
    },
    reducers: {
        setMovies: (state, {payload}) => {
            if (payload.state != "loading") {
                state.movieList = payload.results;
            }
        }
    },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies.movieList;

export default moviesSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        state: "init",
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload.results;
            state.state = payload.state;
        },
    },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies.movies;

export default moviesSlice.reducer
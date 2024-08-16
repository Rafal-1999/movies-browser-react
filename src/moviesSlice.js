import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        cast: [],
        crew: [],
        state: "init",
    },
    reducers: {
        setMovies: (state, { payload }) => {
            if (payload.results) {
                state.movies = payload.results;
            }
            if (payload.state) {
                state.state = payload.state;
            }
            if (payload.cast) {
                state.cast = payload.cast;
            }
            if (payload.crew) {
                state.crew = payload.crew;
            }
        },
    },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies.movies;
export const selectCast = state => state.movies.cast;
export const selectCrew = state => state.movies.crew;
export const selectState = state => state.movies.state;

export default moviesSlice.reducer
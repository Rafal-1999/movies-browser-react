import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        setMovies: ({state, payload}) => {
            state.value = payload.value;
        },
    },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies;

export default moviesSlice.reducer
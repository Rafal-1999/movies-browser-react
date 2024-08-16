import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import peopleReducer from "./peopleSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    cast: [],
    crew: [],
    state: "init",
  },
  reducers: {
    setPeople: (state, { payload }) => {
      if (payload.results) {
        state.people = payload.results;
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

export const { setPeople } = peopleSlice.actions;
export const selectPeople = (state) => state.people.people;
export const selectCast = (state) => state.people.cast;
export const selectCrew = (state) => state.people.crew;

export default peopleSlice.reducer;

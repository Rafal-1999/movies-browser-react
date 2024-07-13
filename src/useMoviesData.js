import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "./moviesSlice";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useMoviesData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );
        dispatch(setMovies(res.data));
      } catch {
        dispatch(setMovies({ state: "error" }));
      }
    };
    getMoviesData();
  }, []);
};

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "./moviesSlice";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useMovieCast = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies({state: "loading"}));
        const getMovieCast = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
                const data = res.data;
                dispatch(setMovies({cast: data.cast, crew: data.crew}));
                dispatch(setMovies({state: "data"}));
            }
            catch {
                dispatch(setMovies({state: "error"}));
            }
        };
        getMovieCast();
    }, []);
};
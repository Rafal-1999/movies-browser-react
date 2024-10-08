import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "./moviesSlice";
import { useNavigate } from "react-router-dom";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useSearchData = (query) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setMovies({state: "loading"}));
        const getSearchData = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&query=${query}&api_key=${apiKey}`);
                dispatch(setMovies(res.data));
                dispatch(setMovies({state: "data"}));
            }
            catch {
                dispatch(setMovies({state: "error"}));
                navigate("/error");
            }
        };
        getSearchData();
    }, [query]);
};
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "./moviesSlice";
import { useNavigate } from "react-router-dom";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useDataById = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setMovies({state: "loading"}));
        const getDataById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
                const data = res.data;
                dispatch(setMovies({results: data}));
                dispatch(setMovies({state: "data"}));
            }
            catch {
                dispatch(setMovies({state: "error"}));
                navigate("/error");
            }
        };
        getDataById();
    }, []);
};

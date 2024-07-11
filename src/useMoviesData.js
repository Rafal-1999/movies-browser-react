import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useMoviesData = () => {
    const [moviesData, setMoviesData] = useState({state: "loading"});
    useEffect(() => {
        const getMoviesData = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
                setMoviesData(res.data);
            }
            catch {
                setMoviesData({state: "error"});
            }
        };
        getMoviesData();
    }, []);
    return moviesData;
};
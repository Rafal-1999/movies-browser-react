import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useSearchData = (query) => {
    const [searchData, setSearchData] = useState({state: "loading"});
    useEffect(() => {
        const getSearchData = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&query=${query}&api_key=${apiKey}`);
                console.log(res.data);
                setSearchData(res.data);
            }
            catch {
                setSearchData({state: "error"});
            }
        };
        getSearchData();
    }, []);
    return searchData;
};
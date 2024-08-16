import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./peopleSlice";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const useSearchPeopleData = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPeople({state: "loading"}));
    const getSearchPersonData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/person?&query=${query}&api_key=${apiKey}`
        );
        dispatch(setPeople(res.data));
        dispatch(setPeople({state: "data"}));
      } catch {
        dispatch(setPeople({ state: "error" }));
      }
    };
    getSearchPersonData();
  }, []);
};

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./peopleSlice";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const usePeopleCast = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPeople({state: "loading"}));
    const getPeopleCast = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${id}/credits?api_key=${apiKey}`
        );
        const data = res.data;
        dispatch(setPeople({ cast: data.cast, crew: data.crew }));
        dispatch(setPeople({state: "data"}));
      } catch {
        dispatch(setPeople({ state: "error" }));
      }
    };
    getPeopleCast();
  }, []);
};

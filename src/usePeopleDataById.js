import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./peopleSlice";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const usePeopleDataById = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPeopleDataById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
        );
        dispatch(setPeople({ results: res.data }));
      } catch {
        dispatch(setPeople({ state: "error" }));
      }
    };
    getPeopleDataById();
  }, []);
};

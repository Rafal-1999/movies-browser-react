import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./peopleSlice";
import { useNavigate } from "react-router-dom";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const usePeopleDataById = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setPeople({state: "loading"}));
    const getPeopleDataById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
        );
        dispatch(setPeople({ results: res.data }));
        dispatch(setPeople({state: "data"}));
      } catch {
        dispatch(setPeople({ state: "error" }));
        navigate("/error");
      }
    };
    getPeopleDataById();
  }, []);
};

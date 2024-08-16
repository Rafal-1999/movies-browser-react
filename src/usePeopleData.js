import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPeople } from "./peopleSlice";
import { useNavigate } from "react-router-dom";

const apiKey = "4b61c5d2cbb79009328876101afea488";

export const usePeopleData = (page) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getPeopleData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page || 1}`
        );
        dispatch(setPeople(res.data));
      } catch {
        dispatch(setPeople({ state: "error" }));
        navigate("/error");
      }
    };
    getPeopleData();
  }, [page]);
}
import { HashRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../common/Navigation";
import MoviesList from "./MoviesList";
import SearchResults from "./SearchResults";
import MoviePage from "./MoviePage";
import { Error } from "../features/Error";
import { NoResults } from "../features/NoResults";
import MovieCardFull from "../common/MovieCardFull";

export const toPopularPeople = () => "/people";
export const toPopularMovies = () => "/movies";
export const toSearchMovies = () => "/search";
export const Router = () => {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path={toPopularMovies()} element={<MoviesList />} />
        <Route path={toSearchMovies()} element={<SearchResults />} />
        <Route path="/moviecardfull" element={<MovieCardFull />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people/:id" element={"Osoba"} />
        <Route path="/people" element={"Osoby"} />
        <Route path="/" element={"Strona główna"} />
        <Route path="/error" element={<Error />} />
        <Route path="/noResults" element={<NoResults />} />
      </Routes>
    </HashRouter>
  );
};

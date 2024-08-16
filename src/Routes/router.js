import { HashRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../common/Navigation";
import MoviesList from "./MovieList";
import SearchResults from "./MovieSearch";
import MoviePage from "./MoviePage";
import { Error } from "./Error";
import { NoResults } from "./NoResults";
import MovieCardFull from "../common/MovieCardFull";
import PeoplePage from "./PeoplePage";
import PeopleList from "./PeopleList";
import PeopleSearch from "./PeopleSearch";

export const toPopularPeople = () => "/people";
export const toPopularMovies = () => "/movies";
export const toSearchMovies = () => "/search";
export const toPeopleSearch = () => "/peoplesearch";
export const Router = () => {

    return (
        <HashRouter>
            <NavigationBar />
            <Routes>
                <Route path={toPopularMovies()} element={<MoviesList/>} />
                <Route path={toSearchMovies()} element={<SearchResults />} />
                <Route path="/moviecardfull" element={<MovieCardFull />} />
                <Route path="/movies/:id" element={<MoviePage/>} />
                <Route path="/people/:id" element={<PeoplePage />} />
                <Route path={toPopularPeople()} element={<PeopleList />} />
                <Route path={toPeopleSearch()} element={<PeopleSearch />} />
                <Route path="/" element={"Strona główna"} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
                <Route path="/noResults" element={<NoResults />} />
            </Routes>
        </HashRouter>
    )
};

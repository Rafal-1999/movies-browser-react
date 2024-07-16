import { HashRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../common/Navigation";
import MoviesList from "./MoviesList";
import SearchResults from "./SearchResults";

export const toMovieCard = () => "/movies";
export const Router = () => {
    return (
        <HashRouter>
            <NavigationBar />
            <Routes>
                <Route path={toMovieCard()} element={<MoviesList/>} />
                <Route path="/search" element={<SearchResults query="up"/>}/>
                <Route path="/movies/:id" element={"Film"} />
                <Route path="/people/:id" element={"Osoba"} />
                <Route path="/people" element={"Osoby"} />
                <Route path="/" element={"Strona główna"} />
            </Routes>
        </HashRouter>
    )
};

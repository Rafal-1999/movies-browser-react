import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import SearchResults from "./SearchResults";
import MoviePage from "./MoviePage";

export const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/movies" element={<MoviesList/>}/>
                <Route path="/search" element={<SearchResults query="up"/>}/>
                <Route path="/movies/:id" element={<MoviePage/>} />
                <Route path="/people/:id" element={"Osoba"} />
                <Route path="/people" element={"Osoby"} />
                <Route path="/" element={"Strona główna"} />
            </Routes>
        </HashRouter>
    )
};

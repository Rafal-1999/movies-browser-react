import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./MoviesList";

export const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/movies" element={<MoviesList/>}/>
                <Route path="/movies/:id" element={"Film"} />
                <Route path="/people/:id" element={"Osoba"} />
                <Route path="/people" element={"Osoby"} />
                <Route path="/" element={"Strona główna"} />
            </Routes>
        </HashRouter>
    )
};

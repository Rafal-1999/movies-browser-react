import { HashRouter, Switch, Route} from "react-router-dom";
import MoviesList from "./Routes/MoviesList";

export const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/movies" element={<MoviesList/>}/>
                <Route path="/movies/:id" element={"Film"} />
                <Route path="/people/:id" element={"Osoba"} />
                <Route path="/people" element={"Osoby"} />
                <Route path="/" element={"Strona główna"} />
            </Switch>
        </HashRouter>
    )
};

import { HashRouter, Switch, Route} from "react-router-dom";

export const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/movies" element={"Filmy"}/>
                <Route path="/movies/:id" element={"Film"} />
                <Route path="/people/:id" element={"Osoba"} />
                <Route path="/people" element={"Osoby"} />
                <Route path="/" element={"Strona główna"} />
            </Switch>
        </HashRouter>
    )
};

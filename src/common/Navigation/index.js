import { useLocation } from "react-router-dom";
import {
  VideoIcon,
  NavigationBar,
  MainHeader,
  Box,
  BoxNav,
  LinkNavigation,
  Input
} from "./styled";
import { toPopularMovies, toPopularPeople } from "../../Routes/router";

const Navigation = ({ query }) => {
    const path = useLocation();

    let content = "movies";
    if (path.pathname.includes("movies")) {
        content = "movies";
    } else {
        content = "people";
    }

    return (
        <NavigationBar>
            <Box>
                <MainHeader><VideoIcon />Movies Browser</MainHeader>
                <BoxNav>
                    <LinkNavigation to={toPopularMovies()}>MOVIES</LinkNavigation>
                    <LinkNavigation to={toPopularPeople()}>PEOPLE</LinkNavigation>
                </BoxNav>
                <Input placeholder={`Search for ${content}...`} type="text" value={query} onChange={() => <></>} />
            </Box>
        </NavigationBar>
    )
};

export default Navigation;

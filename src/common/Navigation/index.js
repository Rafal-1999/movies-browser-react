import { useLocation } from "react-router-dom";
import { VideoIcon, NavigationBar, MainHeader, Box, BoxNav, LinkNavigation, Input } from "./styled";
import { toMovieCard } from "../../Routes/router";

const Navigation = ({ query }) => {
    const path = useLocation();
    console.log(path);

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
                    <LinkNavigation to={toMovieCard()}>MOVIES</LinkNavigation>
                    <LinkNavigation to="/people">PEOPLE</LinkNavigation>
                </BoxNav>
                <Input placeholder={`Search for ${content}...`} type="text" value={query} onChange={""} />
            </Box>
        </NavigationBar>
    )
};

export default Navigation;

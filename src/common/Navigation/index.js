import { NavigationBar, MainHeader, Box, BoxNav, LinkNavigation } from "./styled";
import { toMovieCard } from "../../Routes/router";

const Navigation = () => (
    <NavigationBar>
        <Box>
            <MainHeader>Movies Browser</MainHeader>
            <BoxNav>
                <LinkNavigation to={toMovieCard()}>MOVIES</LinkNavigation>
                <LinkNavigation to="/people">PEOPLE</LinkNavigation>
            </BoxNav>
        </Box>
    </NavigationBar>
);

export default Navigation;

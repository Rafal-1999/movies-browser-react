import { VideoIcon, NavigationBar, MainHeader, Box, BoxNav, LinkNavigation, Input } from "./styled";
import { toMovieCard } from "../../Routes/router";

const Navigation = ({query}) => (
    <NavigationBar>
        <Box>
            <MainHeader><VideoIcon />Movies Browser</MainHeader>
            <BoxNav>
                <LinkNavigation to={toMovieCard()}>MOVIES</LinkNavigation>
                <LinkNavigation to="/people">PEOPLE</LinkNavigation>
            </BoxNav>
            <Input placeholder={"Search for movies..."} type="text" value={query} onChange={""} />
        </Box>
    </NavigationBar>
);

export default Navigation;

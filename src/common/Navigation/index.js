import { NavigationBar, MainHeader, Box, BoxNav, LinkNav } from "./styled";

const Navigation = () => (
    <NavigationBar>
        <Box>
            <MainHeader>Movies Browser</MainHeader>
            <BoxNav>
                <LinkNav to="/movies">MOVIES</LinkNav>
                <LinkNav to="/people">PEOPLE</LinkNav>
            </BoxNav>
        </Box>
    </NavigationBar>
);

export default Navigation;

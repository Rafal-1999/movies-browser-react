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
import { toPopularMovies } from "../../Routes/router";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navigation = () => {

    const [params, setParams] = useSearchParams();
    const searchRef = useRef();
    const navigate = useNavigate();

    let timeout = 0;
    const searchbarHandler = () => {
        setParams(`query=${searchRef.current.value}`)
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            navigate(`/search?query=${searchRef.current.value}`);
        }, 3000);
    };

    return (
        <NavigationBar>
        <Box>
          <MainHeader>
            <VideoIcon />
            Movies Browser
          </MainHeader>
          <BoxNav>
            <LinkNavigation to={toPopularMovies()}>MOVIES</LinkNavigation>
            <LinkNavigation to="/people">PEOPLE</LinkNavigation>
          </BoxNav>
          <Input
            placeholder={"Search for movies..."}
            type="text"
            ref={searchRef}
            onChange={() => {searchbarHandler()}}
          />
        </Box>
      </NavigationBar>
    )
};

export default Navigation;

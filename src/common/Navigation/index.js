import { useLocation } from "react-router-dom";
import {
  VideoIcon,
  NavigationBar,
  MainHeader,
  Box,
  BoxNav,
  LinkNavigation,
  Input,
} from "./styled";
import { toPopularMovies, toPopularPeople } from "../../Routes/router";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navigation = () => {
  const path = useLocation();

  let content = "movies";
  if (path.pathname.includes("movies")) {
    content = "movies";
  } else {
    content = "people";
  }

  const [params, setParams] = useSearchParams();
  const searchRef = useRef();
  const navigate = useNavigate();

  let timeout = 0;
  const searchbarHandler = () => {
    setParams(`query=${searchRef.current.value}`);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (path.pathname.includes("people")) {
        navigate(`/peoplesearch?query=${searchRef.current.value}`);
      } else {
        navigate(`/search?query=${searchRef.current.value}`);
      }
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
          <LinkNavigation to={toPopularPeople()}>PEOPLE</LinkNavigation>
        </BoxNav>
        <Input
          placeholder={`Search for ${content}...`}
          type="text"
          ref={searchRef}
          onChange={() => {
            searchbarHandler();
          }}
        />
      </Box>
    </NavigationBar>
  );
};

export default Navigation;

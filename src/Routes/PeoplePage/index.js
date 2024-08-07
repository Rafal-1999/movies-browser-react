import { Container, List, ListHeadline } from "./styled";
import PersonCardFull from "../../common/PersonCardFull";
import { useParams } from "react-router-dom";
import { usePeopleDataById } from "../../usePeopleDataById";
import { useSelector } from "react-redux";
import { selectPeople, selectCast, selectCrew } from "../../peopleSlice";
import { usePeopleCast } from "../../usePeopleCast";
import MovieCard from "../../common/MovieCard";

const PeoplePage = () => {
  const params = useParams();

  usePeopleDataById(params.id);
  usePeopleCast(params.id);

  const person = useSelector(selectPeople);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);

  const baseImageURL = "https://image.tmdb.org/t/p/h632";
  const baseImageURLmovie = "https://image.tmdb.org/t/p/w500";

  return (
    <Container>
      <PersonCardFull
        description={person.biography}
        imageURL={baseImageURL + person.profile_path}
        title={person.name}
        birthDate={person.birthday}
        birthPlace={person.place_of_birth}
      />
      <>
        <ListHeadline>Movies - Cast</ListHeadline>
        <List>
          {cast.map((movie) => {
            return (
              <MovieCard
                imageURL={baseImageURLmovie + movie.poster_path}
                title={movie.title}
                subtitle={movie.release_date}
                tags={movie.genre_ids}
                rating={movie.vote_average}
                voteCount={movie.vote_count}
              />
            );
          })}
        </List>
        <>
          <ListHeadline>Movies - Crew</ListHeadline>
          <List>
            {crew.map((movie) => {
              return (
                <MovieCard
                  imageURL={baseImageURLmovie + movie.poster_path}
                  title={movie.title}
                  subtitle={movie.release_date}
                  tags={movie.genre_ids}
                  rating={movie.vote_average}
                  voteCount={movie.vote_count}
                />
              );
            })}
          </List>
        </>
      </>
    </Container>
  );
};

export default PeoplePage;

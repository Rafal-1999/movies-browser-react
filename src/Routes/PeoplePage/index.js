import { Container, List, ListHeadline } from "./styled";
import PersonCardFull from "../../common/PersonCardFull";
import { useParams } from "react-router-dom";
import { usePeopleDataById } from "../../usePeopleDataById";
import { useSelector } from "react-redux";
import { selectPeople, selectCast, selectCrew, selectPeopleState } from "../../peopleSlice";
import { usePeopleCast } from "../../usePeopleCast";
import MovieCard from "../../common/MovieCard";
import { Loading } from "../../common/SearchResultsLoading";

const PeoplePage = () => {
  const params = useParams();

  usePeopleDataById(params.id);
  usePeopleCast(params.id);

  const person = useSelector(selectPeople);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const state = useSelector(selectPeopleState);

  const baseImageURL = "https://image.tmdb.org/t/p/h632";
  const baseImageURLmovie = "https://image.tmdb.org/t/p/w500";

  const genreTags = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Sci-Fi", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 },
  ];

  if (state === "loading") {
    return <Loading/>
  } else return (
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
            let tags = movie.genre_ids.map((id) => {
              const genre = genreTags.find((tag) => tag.id === id);
              return genre ? genre.name : null;
            });
            let rating = 0;
            if (movie.vote_average) {
              rating = movie.vote_average.toFixed(1);
            }

            return (
              <MovieCard
                imageURL={baseImageURLmovie + movie.poster_path}
                title={movie.title}
                subtitle={movie.release_date}
                tags={tags}
                rating={rating}
                voteCount={movie.vote_count}
                id={movie.id}
              />
            );
          })}
        </List>
        <>
          <ListHeadline>Movies - Crew</ListHeadline>
          <List>
            {crew.map((movie) => {
              let tags = movie.genre_ids.map((id) => {
                const genre = genreTags.find((tag) => tag.id === id);
                return genre ? genre.name : null;
              });
              let rating = 0;
              if (movie.vote_average) {
                rating = movie.vote_average.toFixed(1);
              }

              return (
                <MovieCard
                  imageURL={baseImageURLmovie + movie.poster_path}
                  title={movie.title}
                  subtitle={movie.release_date}
                  tags={tags}
                  rating={rating}
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

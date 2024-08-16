import { useSelector } from "react-redux";
import { selectMaxPages, selectMovies, selectState } from "../../moviesSlice";
import MovieCard from "../../common/MovieCard";
import { useMoviesData } from "../../useMoviesData";
import { Headline, MainArticle, StyledSection } from "./styled";
import { useLocation } from "react-router-dom";
import PageSelector from "./components/PageSelector/PageSelector";
import { Loading } from "../../common/SearchResultsLoading";

function MoviesList() {
  const params = useLocation();
  const page = new URLSearchParams(params.search).get("page") || 1;

  useMoviesData(page);
  const movies = useSelector(selectMovies);
  const state = useSelector(selectState);

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
  } else if (Array.isArray(movies)) {
    return (
      <StyledSection>
        <Headline>Popular movies</Headline>
        <MainArticle>
          {movies.map((movie) => {
            let movieTags = [];
            movie.genre_ids.forEach((id) => {
              movieTags.push(genreTags.find((tag) => id === tag.id).name);
            });

            let rating = 0;
            rating = movie.vote_average.toFixed(1);

            return (
              <MovieCard
                imageURL={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                title={movie.title}
                subtitle={movie.release_date}
                tags={movieTags}
                rating={rating}
                voteCount={movie.vote_count}
                id={movie.id}
              />
            );
          })}
        </MainArticle>
        <PageSelector page={page} maxPages={500} />
      </StyledSection>
    );
  }
}

export default MoviesList;

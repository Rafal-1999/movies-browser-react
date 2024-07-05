import { useDispatch, useSelector } from "react-redux";
import { selectMovies, setMovies } from "./moviesSlice";
import MovieCard from "./common/MovieCard";
import { useMoviesData } from "./useMoviesData";

function App() {
  const dispatch = useDispatch();
  dispatch(setMovies(useMoviesData()));
  const movies = useSelector(selectMovies);

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

  return (
    <div className="App">
      {movies.map((movie) => {
        let movieTags = [];
        movie.genre_ids.forEach((id) => {
          movieTags.push(genreTags.find((tag) => id === tag.id).name);
        });
        return (
          <MovieCard
            imageURL={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date}
            tags={movieTags}
            rating={movie.vote_average}
            voteCount={movie.vote_count}
          />
        );
      })}
    </div>
  );
}

export default App;

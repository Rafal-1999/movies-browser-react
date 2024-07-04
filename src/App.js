import { useDispatch, useSelector } from "react-redux";
import { selectMovies, setMovies } from "./moviesSlice";
import MovieCard from "./common/MovieCard";
import { useMoviesData } from "./useMoviesData";

function App() {
    const dispatch = useDispatch();
    dispatch(setMovies(useMoviesData()))
    const movies = useSelector(selectMovies);
    return (
        <div className="App">
            {movies.map(movie => (
                <MovieCard imageURL={"https://image.tmdb.org/t/p/w500" + movie.poster_path} title={movie.title} subtitle={movie.release_date} tags={movie.genre_ids} rating={movie.vote_average} voteCount={movie.vote_count}/>
            ))}
        </div>
    );
}

export default App;

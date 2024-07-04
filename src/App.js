import { useSelector } from "react-redux";
import { selectMovies } from "./moviesSlice";
import MovieCard from "./common/MovieCard";

function App() {
    const movies = useSelector(selectMovies);
    return (
        <div className="App">
            {movies.map(movie => (
                <MovieCard imageURL={movie.imageUrl} title={movie.title} subtitle={movie.subtitle} tags={movie.tags} rating={movie.rating} voteCount={movie.voteCount}/>
            ))}
        </div>
    );
}

export default App;

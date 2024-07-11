import { useSelector } from "react-redux";
import { selectMovies } from "./moviesSlice";
import SearchResults from "./Routes/SearchResults";

function App() {
    const movies = useSelector(selectMovies);
    return (
        <div className="App">
            <SearchResults query={"mulan"}/>
        </div>
    );
}

export default App;

import MovieCard from "./common/MovieCard";

function App() {
    return (
        <div className="App">
            <MovieCard imageURL={"err"} title={"Mulan"} subtitle={"2023"} tags={["asdf", "gfds", "YYYT"]} rating={7.5} voteCount={14}/>
        </div>
    );
}

export default App;

import { MovieInfo, Cast, Crew, CastHeader, CrewHeader, CastList, CrewList } from "./styled";
import MovieCardFull from "../../common/MovieCardFull"
import MovieHeading from "./components/MovieHeading.js"
import { useParams } from "react-router-dom";
import { useDataById } from "../../useDataById";
import { useSelector } from "react-redux";
import { selectMovies, selectCast, selectCrew, selectState } from "../../moviesSlice";
import { useMovieCast } from "../../useMovieCast";
import PersonCard from "../../common/PersonCard";
import { Loading } from "../../common/SearchResultsLoading/index.js";
import { useYearFromDate } from "../../useYearFromDate.js";

const MoviePage = () => {
    const params = useParams();

    useDataById(params.id);
    useMovieCast(params.id);

    const movie = useSelector(selectMovies);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const state = useSelector(selectState);

    const baseImageURL = "https://image.tmdb.org/t/p/w500";

    // these if statements are kinda bad but i didnt know any other way of making operations on selected variables :C

    let rating = 0;
    if (movie.vote_average) {
        rating = movie.vote_average.toFixed(1);
    }

    let tags = [];
    if (movie.genres) {
        movie.genres.forEach(genre => {
            tags.push(genre.name)
        })
    }

    let production = "";
    if (movie.production_companies) {
        movie.production_companies.forEach(company => {
            production += ` ${company.name}`;
        })
    }

    let date = "";
    if (movie.release_date) {
        date = movie.release_date;
    }
    let year = useYearFromDate(date);
    
    if (state === "loading") {
        return <Loading/>
    } else return (
        <>
            <MovieHeading background={baseImageURL + movie.backdrop_path} title={movie.title} rating={rating} voteCount={movie.vote_count}/>
            <MovieInfo>
                <MovieCardFull description={movie.overview} imageURL={baseImageURL + movie.poster_path} title={movie.title} production={production} release={year} tags={tags} rating={rating} voteCount={movie.vote_count} />
            </MovieInfo>
            <Cast>
                <CastHeader>Cast</CastHeader>
                <CastList>
                    {cast.map(actor => {
                        return (<PersonCard id={actor.id} image={baseImageURL + actor.profile_path} title={actor.name} role={actor.character} />)
                    })}
                </CastList>
            </Cast>
            <Crew>
                <CrewHeader>Crew</CrewHeader>
                <CrewList>
                    {crew.map(member => {
                        return (<PersonCard id={member.id} image={baseImageURL + member.profile_path} title={member.name} role={member.known_for_department} />)
                    })}
                </CrewList>
            </Crew>
        </>
    );
};

export default MoviePage;

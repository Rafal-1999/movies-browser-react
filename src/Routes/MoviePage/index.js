import { MovieHeading, MovieInfo, Cast, Crew, CastHeader, CrewHeader, CastList, CrewList } from "./styled";
import MovieCardFull from "../../common/MovieCardFull"
import { useParams } from "react-router-dom";
import { useDataById } from "../../useDataById";
import { useSelector } from "react-redux";
import { selectMovies, selectCast, selectCrew } from "../../moviesSlice";
import { useMovieCast } from "../../useMovieCast";
import PersonCard from "../../common/PersonCard";

const MoviePage = () => {
    const params = useParams();
    useDataById(params.id);
    useMovieCast(params.id);

    const movie = useSelector(selectMovies);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);

    return (
        <>
            <MovieHeading>

            </MovieHeading>
            <MovieInfo>
                <MovieCardFull description={movie.overview} imageURL={"https://image.tmdb.org/t/p/w500" + movie.poster_path} title={movie.title} production={"asdf"} release={movie.release_date} tags={["asdf", "asdf", "Asdf"]} rating={movie.vote_average} voteCount={movie.vote_count} />
            </MovieInfo>
            <Cast>
                <CastHeader>Cast</CastHeader>
                <CastList>
                    {cast.map(actor => {
                        return (<PersonCard image={"https://image.tmdb.org/t/p/w500" + actor.profile_path} title={actor.name} role={actor.role} />)
                    })}
                </CastList>
            </Cast>
            <Crew>
                <CrewHeader>Crew</CrewHeader>
                <CrewList>
                    {crew.map(member => {
                        return (<PersonCard image={"https://image.tmdb.org/t/p/w500" + member.profile_path} title={member.name} role={member.role} />)
                    })}
                </CrewList>
            </Crew>
        </>
    );
};

export default MoviePage;
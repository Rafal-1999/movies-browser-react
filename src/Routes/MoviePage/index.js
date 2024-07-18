import { MovieHeading, MovieInfo, Cast, Crew, CastHeader, CrewHeader, CastList, CrewList } from "./styled";
import MovieCardFull from "../../common/MovieCardFull"

const MoviePage = () => {
    return (
        <>
            <MovieHeading>

            </MovieHeading>
            <MovieInfo>
                <MovieCardFull description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " image="idk" title="Mulan" production="ching chong" release="2021-12-07" tags={["cock", "cock", "cock"]} rating={7.1} voteCount={335}/>
            </MovieInfo>
            <Cast>
                <CastHeader>Cast</CastHeader>
                <CastList>
                    
                </CastList>
            </Cast>
            <Crew>
                <CrewHeader>Crew</CrewHeader>
                <CrewList>
                    
                </CrewList>
            </Crew>
        </>
    );
};

export default MoviePage;
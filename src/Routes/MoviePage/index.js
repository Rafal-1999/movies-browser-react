import { MovieHeading, MovieInfo } from "./styled";
import MovieCardFull from "../../common/MovieCardFull"

const MoviePage = () => {
    return (
        <>
            <MovieHeading>

            </MovieHeading>
            <MovieInfo>
                <MovieCardFull image="idk" title="Mulan" production="ching chong" release="2021-12-07" tags={["cock", "cock", "cock"]} rating={7.1} voteCount={335}/>
            </MovieInfo>
        </>
    );
};

export default MoviePage;
import { OutOf, Stats, Container, Banner, Details, Rating, Votes, Title, StarIcon } from "./MovieHeadingStyled";
import { useCommaToRating } from "../../../useCommaToRating";

const MovieHeading = ({ background, title, rating, voteCount }) => {
    return (
        <Container>
            <Banner src={background} />
            <Details>
                <Title>{title}</Title>
                <Rating>
                    <StarIcon/>
                    &nbsp;{useCommaToRating(rating)}
                    <OutOf> / 10</OutOf>
                </Rating>
                <Votes>{voteCount} votes</Votes>
            </Details>
        </Container>
    );
};

export default MovieHeading;

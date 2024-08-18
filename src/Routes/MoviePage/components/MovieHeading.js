import {
  OutOf,
  Container,
  Banner,
  Details,
  Rating,
  Votes,
  Title,
  StyledStarIcon,
  VotesMobile,
} from "./MovieHeadingStyled";
import { useCommaToRating } from "../../../useCommaToRating";

const MovieHeading = ({ background, title, rating, voteCount }) => {
  return (
    <Container>
      <Banner src={background} />
      <Details>
        <Title>{title}</Title>
        <Rating>
          <StyledStarIcon />
          &nbsp;{useCommaToRating(rating)}
          <OutOf> / 10</OutOf>
          <VotesMobile>{voteCount} votes</VotesMobile>
        </Rating>
        <Votes>{voteCount} votes</Votes>
      </Details>
    </Container>
  );
};

export default MovieHeading;

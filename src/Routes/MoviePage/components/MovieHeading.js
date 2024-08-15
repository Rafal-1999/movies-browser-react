import {
  OutOf,
  Container,
  Banner,
  Details,
  Rating,
  Votes,
  Title,
  StyledStarIcon,
} from "./MovieHeadingStyled";

const MovieHeading = ({ background, title, rating, voteCount }) => {
  return (
    <Container>
      <Banner src={background} />
      <Details>
        <Title>{title}</Title>
        <Rating>
          <StyledStarIcon />
          &nbsp;{rating}
          <OutOf> / 10</OutOf>
        </Rating>
        <Votes>{voteCount} votes</Votes>
      </Details>
    </Container>
  );
};

export default MovieHeading;

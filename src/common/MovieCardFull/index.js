import {
  Title,
  Container,
  Image,
  Info,
  Subtitle,
  DetailBox,
  Production,
  Release,
  Label,
  TagList,
  Tag,
  Rating,
  StarRating,
  VoteCount,
  OutOf,
  Description,
  DescriptionMobile,
  StyledStarIcon,
} from "./styled";

const MovieCardFull = ({
  description,
  imageURL,
  title,
  production,
  release,
  tags,
  rating,
  voteCount,
}) => {
  return (
    <Container>
      <Image src={imageURL} />
      <Info>
        <Title>{title}</Title>
        <Subtitle>{release}</Subtitle>
        <DetailBox>
          <Production>
            <Label>Production: </Label>
            {production}
          </Production>
          <Release>
            <Label>Release Date: </Label>
            {release}
          </Release>
        </DetailBox>
        <TagList>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagList>
        <Rating>
          <StyledStarIcon />
          <StarRating>
            {rating}
            <OutOf> /10</OutOf>
          </StarRating>
          <VoteCount>{voteCount} votes</VoteCount>
        </Rating>
        <Description>{description}</Description>
      </Info>
      <DescriptionMobile>{description}</DescriptionMobile>
    </Container>
  );
};

export default MovieCardFull;

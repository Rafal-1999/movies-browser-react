import { useAddComma } from "../../useAddComma";
import { useYearFromDate } from "../../useYearFromDate";
import {
  CardContainer,
  Image,
  Info,
  Title,
  Subtitle,
  Tag,
  Rating,
  VoteCount,
  StarRating,
  TagList,
  StyledStarIcon,
  Data,
} from "./styled";

const MovieCard = ({ imageURL, title, subtitle, tags, rating, voteCount }) => {
  return (
    <CardContainer>
      <Image src={imageURL} />
      <Data>
        <Info>
          <Title>{title}</Title>
          <Subtitle>{useYearFromDate(subtitle)}</Subtitle>
          <TagList>
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </TagList>
        </Info>
        <Rating>
          <StyledStarIcon />
          <StarRating>{useAddComma(rating)}</StarRating>
          <VoteCount>{voteCount} votes</VoteCount>
        </Rating>
      </Data>
    </CardContainer>
  );
};

export default MovieCard;

import { useAddComma } from "../../useAddComma";
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
} from "./styled";

const MovieCard = ({ imageURL, title, subtitle, tags, rating, voteCount }) => {
  return (
    <CardContainer>
      <Image src={imageURL} />
      <div>
        <Info>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <TagList>
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </TagList>
        </Info>
        <Rating>
          <StyledStarIcon />
          <StarRating>{useAddComma(rating.toFixed(1))}</StarRating>
          <VoteCount>{voteCount} votes</VoteCount>
        </Rating>
      </div>
    </CardContainer>
  );
};

export default MovieCard;

import { useNavigate } from "react-router-dom";
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

const MovieCard = ({ imageURL, title, subtitle, tags, rating, voteCount, id }) => {
  const navigate = useNavigate();
  if (imageURL === "https://image.tmdb.org/t/p/w500null") {
    imageURL = require("../../Resources/noposter.png");
  }
  return (
    <CardContainer onClick={() => {navigate(`/movies/${id}`)}}>
      <Image src={imageURL} />
      <Data>
        <Info>
          <Title>{title}</Title>
          <Subtitle>{useYearFromDate(subtitle)}</Subtitle>
          <TagList>
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
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

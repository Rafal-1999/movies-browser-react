import { CardContainer, Image, Info, Title, Subtitle, Tag, Rating, VoteCount, StarRating, TagList, StarIcon } from "./styled";

const MovieCard = ({ imageURL, title, subtitle, tags, rating, voteCount }) => {
    return (
        <CardContainer>
            <Image src={imageURL} />
            <Info>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <TagList>
                    {tags.map(tag => (
                        <Tag>{tag}</Tag>
                    ))}
                </TagList>
            </Info>
            <Rating>
                <StarIcon/>
                <StarRating>
                    {rating}
                </StarRating>
                <VoteCount>{voteCount} votes</VoteCount>
            </Rating>
        </CardContainer>
    )
};

export default MovieCard;
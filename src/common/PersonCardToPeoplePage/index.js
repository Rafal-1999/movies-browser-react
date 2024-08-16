import { useNavigate } from "react-router-dom";
import { Image, Box, Card, Header } from "./styled";

const PersonCard = ({ image, title, id }) => {
  const navigate = useNavigate();
  if (image === "https://image.tmdb.org/t/p/h632null") {
    image = require("../../Resources/poster.png");
  }
  return (
    <Card
      onClick={() => {
        navigate(`/people/${id}`);
      }}
    >
      <Box>
        <Image src={image} />
      </Box>
      <Header>{title}</Header>
    </Card>
  );
};

export default PersonCard;

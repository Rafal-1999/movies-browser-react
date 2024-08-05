import { Image, Box, Card, Header, Role } from "./styled";

const PersonCard = ({ image, title, role }) => {
  if (image === "https://image.tmdb.org/t/p/w500null") {
    image = require("../../Resources/poster.png");
  }
  return (
    <Card>
      <Box>
        <Image src={image} />
      </Box>
      <Header>{title}</Header>
    </Card>
  );
};

export default PersonCard;

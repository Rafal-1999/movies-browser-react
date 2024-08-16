import { Image, Box, Card, Header, Role } from "./styled";
import { useNavigate } from "react-router-dom";

const PersonCard = ({ image, title, role, id }) => {
    const navigate = useNavigate();
    if (image === "https://image.tmdb.org/t/p/w500null") {
        image = require("../../Resources/poster.png");
    }
    return (
        <Card onClick={() => {navigate(`/people/${id}`)}}>
            <Box>
                <Image src={image} />
            </Box>
            <Header>{title}</Header>
            <Role>{role}</Role>
        </Card>
    );
};

export default PersonCard;

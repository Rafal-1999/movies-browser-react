import { Image, Box, Card, Header, Role } from "./styled";

const PersonCard = ({ image, title, role }) => {
    if (image === null) {
        image = "../Resources/Poster.png"
    }
    return (
        <Card>
            <Box>
                <Image src={image} alt={title}/>
            </Box>
            <Header>{title}</Header>
            <Role>{role}</Role>
        </Card>
    );
};

export default PersonCard;

import { Image, Box, Card, Header, Role } from "./styled";

const PersonCard = ({ image, title, role }) => (
    <Card>
        <Box>
            <Image src={image} />
        </Box>
        <Header>{title}</Header>
        <Role>{role}</Role>
    </Card>
);

export default PersonCard;

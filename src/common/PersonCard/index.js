import { Card, Header, Role } from "./styled";

const PersonCard = ({ title, role }) => (
    <Card>
        <Header>{title}</Header>
        <Role>{role}</Role>
    </Card>
);

export default PersonCard;

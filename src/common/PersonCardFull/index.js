import {
  Container,
  Image,
  Info,
  Title,
  Birth,
  Label,
  Description,
} from "./styled";

const PersonCardFull = ({
  description,
  imageURL,
  title,
  birthDate,
  birthPlace,
}) => {
  return (
    <Container>
      <Image src={imageURL} />
      <Info>
        <Title>{title}</Title>
        <Birth>
          <Label>Date of birth:</Label>
          {birthDate}
        </Birth>
        <Birth>
          <Label>Place of birth:</Label>
          {birthPlace}
        </Birth>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export default PersonCardFull;

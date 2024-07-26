import {
  Section,
  Headline,
  Info,
  ButtonNavLink,
  Wrapper,
  StyledDanger,
} from "./styled";
import { toMovieCard } from "../../Routes/router";

export const Error = () => (
  <Wrapper>
    <StyledDanger />
    <Section>
      <Headline>Ooops! Something went wrong...</Headline>
      <Info>
        Please check your network connection <br /> and try again
      </Info>
      <ButtonNavLink to={toMovieCard()}>Back to home page</ButtonNavLink>
    </Section>
  </Wrapper>
);

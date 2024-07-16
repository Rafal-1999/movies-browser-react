import {
  Section,
  Headline,
  Info,
  Button,
  Wrapper,
  StyledDanger,
} from "./styled";

export const Error = () => (
  <Wrapper>
    <StyledDanger />
    <Section>
      <Headline>Ooops! Something went wrong...</Headline>
      <Info>
        Please check your network connection <br /> and try again
      </Info>
      <Button>Back to home page</Button>
    </Section>
  </Wrapper>
);

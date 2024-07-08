import { Section, Headline, Info, Button, Wrapper } from "./styled";
import { ReactComponent as Danger } from "./../../Resources/Danger.svg";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Section>
      <Headline>Ooops! Something went wrong...</Headline>
      <Info>
        Please check your network connection <br /> and try again
      </Info>
      <Button>Back to home page</Button>
    </Section>
  </Wrapper>
);

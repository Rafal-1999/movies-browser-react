import { StyledPicture, Wrapper, Headline } from "./styled";

export const NoResults = ({ query }) => (
  <Wrapper>
    <Headline>Sorry, there are no results for "{query}"</Headline>
    <StyledPicture />
  </Wrapper>
);

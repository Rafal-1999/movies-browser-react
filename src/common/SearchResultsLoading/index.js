import { StyledIconSpinner, Wrapper, Headline } from "./styled";

export const Loading = ({ query }) => (
  <Wrapper>
    <Headline>Search results for "{query}"</Headline>
    <StyledIconSpinner />
  </Wrapper>
);
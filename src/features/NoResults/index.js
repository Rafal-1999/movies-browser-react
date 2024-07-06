import { StyledPicture, Wrapper } from "./styled";

export const NoResults = ({ query }) => (
  <Wrapper>
    Sorry, there are no results for "{query}"
    <StyledPicture />
  </Wrapper>
);

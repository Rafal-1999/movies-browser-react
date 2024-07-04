import { StyledIconSpinner, Wrapper } from "./styled";

export const Loading = ({ query }) => (
  <Wrapper>
    Search results for "{ query }"
    <StyledIconSpinner />
  </Wrapper>
);
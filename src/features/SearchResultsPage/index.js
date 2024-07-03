import { StyledIconSpinner, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    Search results for ""
    <StyledIconSpinner />
  </Wrapper>
);

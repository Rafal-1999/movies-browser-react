import { StyledIconSpinner, Wrapper } from "./styled";

const Loading = ({ query }) => (
  <Wrapper>
    Search results for "{ query }"
    <StyledIconSpinner />
  </Wrapper>
);

export default Loading
import { useLocation } from "react-router-dom";
import { StyledIconSpinner, Wrapper, Headline } from "./styled";

export const Loading = ({ query }) => {
  const path = useLocation();
  console.log(path, path.pathname.includes("search"));
  return (
    <Wrapper>
      <StyledIconSpinner />
    </Wrapper>
  );
};
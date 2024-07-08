import styled from "styled-components";
import { ReactComponent as Picture } from "./../../Resources/Picture.svg";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h1`
  padding-left: 276px;
  margin-top: 56px;
  font-size: 36px;
`;

export const StyledPicture = styled(Picture)`
  margin-top: 40px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: center;
`;

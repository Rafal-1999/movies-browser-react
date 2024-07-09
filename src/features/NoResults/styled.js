import styled from "styled-components";
import { ReactComponent as Picture } from "./../../Resources/Picture.svg";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Headline = styled.h1`
  padding-left: 276px;
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    padding-left: 16px;
    font-weight: 500;
  }
`;

export const StyledPicture = styled(Picture)`
  margin-top: 40px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    width: 150px;
    height: 150px;
  }
`;

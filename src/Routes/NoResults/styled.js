import styled from "styled-components";
import { ReactComponent as Picture } from "./../../Resources/Picture.svg";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h1`
  padding-left: 15%;
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
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

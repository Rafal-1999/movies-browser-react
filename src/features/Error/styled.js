import styled from "styled-components";
import { ReactComponent as Danger } from "./../../Resources/Danger.svg";

export const StyledDanger = styled(Danger)`
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 35px;
    height: 35px;
  }
`;

export const Wrapper = styled.article`
  margin-top: 180px;
  display: grid;
  justify-items: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Headline = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Info = styled.h2`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  width: 181px;
  height: 51px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 6px;
    width: 80px;
    height: 18px;
  }
`;

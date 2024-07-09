import styled, { keyframes } from "styled-components";
import { ReactComponent as iconSpinner } from "../../Resources/icon-spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.woodsmoke};
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h1`
  font-weight: 600;
  margin-top: 56px;
  font-size: 36px;
  padding-left: 276px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    font-size: 14px;
    padding-left: 16px;
    font-weight: 500;
  }
`;

export const StyledIconSpinner = styled(iconSpinner)`
  margin-top: 120px;
  animation: ${rotate} 1s linear infinite;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    width: 35px;
    height: 35px;
  }
`;

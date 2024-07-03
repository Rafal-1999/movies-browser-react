import styled, { keyframes } from "styled-components";
import { ReactComponent as iconSpinner } from "./EllipseIcon.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  align-items: center;
  flex-direction: column;
  margin-top: 88px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: center;
`;

export const StyledIconSpinner = styled(iconSpinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
`;

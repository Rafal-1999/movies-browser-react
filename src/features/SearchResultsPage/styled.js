import styled, { keyframes } from "styled-components";
import { ReactComponent as iconSpinner } from "../../Resources/icon-spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  margin-top: 56px;
  font-size: 36px;
  padding-left: 276px;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: flex;
  flex-direction: column;
`;

export const StyledIconSpinner = styled(iconSpinner)`
  margin-top: 120px;
  animation: ${rotate} 1s linear infinite;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: center;
`;

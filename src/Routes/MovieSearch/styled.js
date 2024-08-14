import styled from "styled-components";

export const Main = styled.div`
  margin: 0px auto;
  max-width: 1368px;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
  grid-gap: 24px;
  margin-top: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

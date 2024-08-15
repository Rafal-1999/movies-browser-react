import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 24px;
  }
`;

export const ListHeadline = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
  grid-gap: 24px;
  margin-top: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(272px, max-content));
    justify-content: center;
  }
`;

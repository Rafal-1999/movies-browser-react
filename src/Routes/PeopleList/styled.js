import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 56px;
  padding-left: 15%;
  padding-right: 15%;
`;

export const MainArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-top: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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

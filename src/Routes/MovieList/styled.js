import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 56px;
  padding-left: 15%;
  padding-right: 15%;
`;

export const MainArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
  grid-gap: 24px;
  margin-top: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(272px, max-content));
    justify-content: center;
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

import styled from "styled-components";

export const MovieHeading = styled.div`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  aspect-ratio: 192/77;
`;

export const MovieInfo = styled.div`
  margin: 64px 15%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px 16px;
  }
`;

export const Cast = styled.div`
  margin: 64px 15%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px 16px;
  }
`;

export const CastHeader = styled.p`
  font-weight: 600;
  font-size: 36px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, max-content));
  grid-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, max-content));
    grid-gap: 16px;
  }
`;

export const Crew = styled.div`
  margin: 64px 15%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px 16px;
  }
`;

export const CrewHeader = styled.p`
  font-weight: 600;
  font-size: 36px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;

export const CrewList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, max-content));
  grid-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

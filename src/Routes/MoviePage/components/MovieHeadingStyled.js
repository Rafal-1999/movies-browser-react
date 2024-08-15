import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../Resources/shape-star.svg";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  aspect-ratio: 192/77;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    );
`;

export const Banner = styled.img`
  height: 100%;
  z-index: -1;
`;

export const Details = styled.div`
  align-self: flex-end;
  justify-self: left;
  position: absolute;
  color: white;
  margin-right: 50%;
  margin-left: 276px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 146px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 16px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 64px;
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 44px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
  }
`;

export const Rating = styled.div`
  font-size: 30px;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-weight: 600px;
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 600px;
    font-size: 14px;
  }
`;

export const OutOf = styled.span`
  font-weight: 400;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;

export const Votes = styled.div`
  margin-bottom: 56px;
  font-weight: 400px;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 13px;
    margin-bottom: 33px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;

import styled from "styled-components";
import { ReactComponent as StarIcon } from "./../../Resources/shape-star.svg";

export const CardContainer = styled.div`
  transition: all 0.2s linear;
  width: 324px;
  min-height: 650px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 288px;
    min-height: 201px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }

  &:hover {
    outline: 1px solid ${({ theme }) => theme.color.woodsmoke};
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 434px;
  width: 292px;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Info = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 22px;
  margin: 0px;
  width: 292px;
  word-break: break-word;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    width: 120px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.color.waterloo};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const TagList = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  width: 292px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 107px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Tag = styled.div`
  font-weight: 400;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 5px;
  margin-top: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-top: 0;
  }
`;

export const StarRating = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const VoteCount = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const StyledStarIcon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
  }
`;
export const Data = styled.div`
  min-width: 169px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    justify-content: start;
  }
`;

import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../Resources/shape-star.svg";

export const Container = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 130px 1fr;
  }
`;

export const Image = styled.img`
  height: 464px;
  width: 312px;
  margin: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 169px;
    width: 114px;
    margin: 16px;
  }
`;

export const Info = styled.div`
  margin: 40px;
  margin-left: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 36px;
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  margin: 24px 0px;
  font-size: 22px;
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;
export const DetailBox = styled.div``;

export const Production = styled.p`
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Release = styled.p`
  margin: 0px;
  margin-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const TagList = styled.div`
  margin-top: 24px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0px;
  }
`;

export const Tag = styled.div`
  font-weight: 400;
  font-size: 14px;
  background: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 5px;
  margin-top: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: baseline;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 8px;
  }
`;

export const StarRating = styled.span`
  font-size: 22px;
  height: 22px;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const OutOf = styled.span`
  font-weight: 400;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const VoteCount = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-left: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-left: 7px;
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const DescriptionMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: initial;
    margin: 16px;
    margin-top: 0;
    font-weight: 400;
    font-size: 14px;
    display: grid;
    grid-column: 1 / -1;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

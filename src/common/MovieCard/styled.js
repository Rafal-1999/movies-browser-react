import styled from "styled-components";

export const CardContainer = styled.div`
  width: 324px;
  min-height: 650px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 434px;
  width: 292px;
  border-radius: 5px;
`;

export const Info = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 22px;
  margin: 0px;
  width: 292px;
  word-break: break-word;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 292px;
`;

export const Tag = styled.div`
  font-weight: 400;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 5px;
  margin-top: 4px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const StarRating = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const VoteCount = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
`;

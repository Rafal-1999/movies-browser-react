import styled from "styled-components";

export const Header = styled.h3`
  text-align: center;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 18.2px;
  font-family: "Poppins", sans-serif;
  margin: 8px 0px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (min-width: 768px) {
    line-height: 28.6px;
    font-size: 22px;
    margin-top: 12px;
  }
`;

export const Role = styled.span`
  line-height: 16.9px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 13px;
  margin: 8px auto 0px auto;
  display: block;
  width: auto;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Card = styled.div`
  color: ${({ theme }) => theme.color.woodsmoke};
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  padding: 8px;
  width: 208px;
  height: auto;
  transition: all 0.2s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 136px;
    height: auto;
    padding: 16px 16px;
  }

  &:hover {
    outline: 1px solid ${({ theme }) => theme.color.woodsmoke};
    cursor: pointer;
  }
`;

export const Box = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 178px;
  width: 100%;

  @media (min-width: 768px) {
    height: 231px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: gray;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 120px;
    height: 178px;
  }
`;

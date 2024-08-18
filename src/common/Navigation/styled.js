import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Video } from "../../Resources/Video.svg";

export const NavigationBar = styled.header`
  background: ${({ theme }) => theme.color.woodsmoke};
  min-height: 94px;
  margin-bottom: 0px;
  padding: 24px 16px 16px 16px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    padding: 23px 16px;
  }
`;

export const MainHeader = styled.h1`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  line-height: 40px;
  margin: 0;
  display: inline-block;
  grid-area: top;

  @media (min-width: 276px) {
    grid-area: left;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 992px) {
    grid-area: left;
  }
`;

export const VideoIcon = styled(Video)`
  width: 13.1px;
  height: 9.84px;
  vertical-align: middle;
  margin-right: 9.8px;

  @media (min-width: 768px) {
    width: 30.84px;
    height: 23.15px;
    margin-right: 11.5px;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;
  display: grid;
  grid-template-areas:
    "top top"
    "middle middle"
    "bottom bottom";
  grid-template-columns: auto;
  row-gap: 24px;
  align-items: center;

  @media (min-width: 276px) {
    grid-template-areas:
      "left right"
      "center center";
  }

  @media (min-width: 992px) {
    grid-template-areas: "left  leftMiddle rightMiddle  right";
  }
`;

export const BoxNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  grid-area: middle;
  gap: 12px;

  @media (min-width: 276px) {
    grid-area: right;
    gap: 16px;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
    grid-area: leftMiddle;
  }
`;

export const Input = styled.input`
  border-radius: 33px;
  height: 44px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid #e4e6f0;
  padding: 14px 14px 13px 40px;
  grid-area: bottom;
  font-size: 13px;
  line-height: 16.9px;
  font-weight: 400;
  font-family: "Poppins";
  position: relative;
  background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.84394" cy="7.84442" r="5.99237" stroke="%23627489" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0117 12.3234L14.3611 14.6667" stroke="%23627489" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-position: left 16px center;
  background-repeat: no-repeat;
  background-size: 16px 16px;

  @media (min-width: 276px) {
    height: 48px;
    line-height: 24px;
    font-size: 16px;
    padding: 12px 12px 12px 64px;
    grid-area: center;
    background-position: left 24px center;
    background-size: 24px 24px;
  }

  @media (min-width: 992px) {
    grid-area: right;
  }
`;

export const LinkNavigation = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Poppins";
  line-height: 18px;
  text-decoration: none;
  border-radius: 29px;
  transition: all 0.2s linear;

  @media (min-width: 768px) {
    padding: 14px 24px;
    line-height: 21px;
    font-size: 14px;
    border-radius: 24px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.woodsmoke};
    background: ${({ theme }) => theme.color.white};
  }
`;

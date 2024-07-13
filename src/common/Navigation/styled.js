import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBar = styled.header`
    background: #18181B;
    min-height: 94px;
    margin-bottom: 24px;
    padding: 0px 16px 16px 16px;

    @media (min-width: 768px) {
        margin-bottom: 56px;
    }
`;

export const MainHeader = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 40px;
    margin: 27px 0;
    display: inline-block;
    grid-area: top;

    @media (min-width: 576px) {
        grid-area: left;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (min-width: 992px) {
        grid-area: left;
    }
`;

export const Box = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-areas:
    "top top"
    "middle middle"
    "bottom bottom";
    grid-template-columns: auto;
    row-gap: 24px;
    align-items: center;

    @media (min-width: 576px) {
        grid-template-areas: 
        "left right"
        "center center";
    }

    @media (min-width: 992px) {
        grid-template-areas: 
        "left leftMiddle rightMiddle right";
    }
`;

export const BoxNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    grid-area: middle;

    @media (min-width: 576px) {
        grid-area: right;
    }

    @media (min-width: 992px) {
        grid-area: leftMiddle;
    }
`;

export const Input = styled.input`
    border-radius: 33px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #E4E6F0;
    padding: 14px 14px 13px 40px;
    grid-area: bottom;
    font-size: 13px;
    line-height: 16.9px;
    font-weight: 400;

    @media (min-width: 576px) {
        height: 48px;
        line-height: 24px;
        font-size: 16px;
        padding: 12px 12px 12px 64px;
        grid-area: center;
    }

    @media (min-width: 992px) {
        grid-area: right;
    }
`;

export const LinkNavigation = styled(NavLink)`
    color: #FFFFFF;
    padding: 8px 12px;
    font-size: 15px;

    @media (min-width: 768px) {
        padding: 14px 24px;
    }
`;

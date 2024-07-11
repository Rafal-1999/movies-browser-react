import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBar = styled.header`
    background: #18181B;
    min-height: 94px;
`;

export const MainHeader = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 40px;
    margin: 27px 0;
    display: inline-block;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Box = styled.div`
    margin: 0 auto;
    width: 863px;
`;

export const BoxNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
`;

export const LinkNavigation = styled(NavLink)`
    color: #FFFFFF;
    padding: 8px 12px;
    font-size: 15px;

    @media (min-width: 768px) {
        padding: 14px 24px;
    }
`;

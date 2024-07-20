import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Video } from "../../Resources/Video.svg";

export const NavigationBar = styled.header`
    background: ${({ theme }) => theme.color.woodsmoke};
    min-height: 94px;
    margin-bottom: 24px;
    padding: 24px 16px 16px 16px;

    @media (min-width: 768px) {
        margin-bottom: 56px;
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
    max-width: 1100px;
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
    gap: 12px;

    @media (min-width: 576px) {
        grid-area: right;
        gap: 16px;
    }

    @media (min-width: 992px) {
        grid-area: leftMiddle;
    }
`;

export const Input = styled.input`
    border-radius: 33px;
    height: 44px;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid #E4E6F0;
    padding: 14px 14px 13px 40px;
    grid-area: bottom;
    font-size: 13px;
    line-height: 16.9px;
    font-weight: 400;
    font-family: "Poppins";
    position: relative;

    &::before {
        content: url('data:image/svg+xml,<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7659 1.52802C5.21587 1.52802 1.52734 5.21654 1.52734 9.76657C1.52734 14.3166 5.21587 18.0051 9.7659 18.0051C14.3159 18.0051 18.0045 14.3166 18.0045 9.76657C18.0045 5.21654 14.3159 1.52802 9.7659 1.52802ZM0.0273438 9.76657C0.0273438 4.38812 4.38744 0.0280151 9.7659 0.0280151C15.1444 0.0280151 19.5045 4.38812 19.5045 9.76657C19.5045 12.3045 18.5337 14.6156 16.9432 16.349L20.0713 19.469C20.3646 19.7615 20.3652 20.2363 20.0727 20.5296C19.7802 20.8229 19.3053 20.8235 19.012 20.531L15.8467 17.3739C14.1803 18.7076 12.0662 19.5051 9.7659 19.5051C4.38744 19.5051 0.0273438 15.145 0.0273438 9.76657Z" fill="%23627489"/></svg>');
        position: absolute;
        top: 15.85px;
        left: 17.85px;
        width: 21px;
        height: 21px;
    }

    @media (min-width: 576px) {
        height: 48px;
        line-height: 24px;
        font-size: 16px;
        padding: 12px 12px 12px 64px;
        grid-area: center;

        &::before {
            top: 14.78px;
            left: 26.78px;
        }
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

    @media (min-width: 768px) {
        padding: 14px 24px;
        line-height: 21px;
        font-size: 14px;
        border-radius: 24px;
    }

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
`;

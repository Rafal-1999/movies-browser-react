import styled from "styled-components";

export const Header = styled.h3`
    text-align: center;
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    font-family: "Poppins", sans-serif;
    margin: 8px 0px;
    color: #18181B;

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
    font-family: "Poppins", sans-serif;
    color: #7E839A;
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
    color: #18181B;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px #BAC7D580;
    border-radius: 5px;
    padding: 8px;
    min-width: 208px;
    min-height: 339px;

    @media (min-width: 768px) {
        padding: 16px 16px;
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
`;

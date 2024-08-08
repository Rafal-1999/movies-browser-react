import styled from "styled-components";

export const PageButton = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin: 6px;
    padding: 8px;
`

export const PageButtonLeft = styled(PageButton)`
    background-color: ${({ theme }) => theme.color.mystic};
    transition: all 0.3s linear;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: #edeef4;
    }
`

export const Bold = styled.strong`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0px;
    }
`

export const PageButtonNext = styled.button`
    border: none;
    margin: 6px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.color.pattensBlue};
    border-radius: 5px;
    &:focus, 
    &:hover {
        background-color: #baccef;
    }
`

export const PageCounter = styled.span`

    margin: 0 24px;
    color: ${({ theme }) => theme.color.waterloo};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 8px;
    }
`;

export const ButtonLabel = styled.span`
    font-size: 14px;
    margin: 8px;
`

export const Container = styled.div`
    margin-bottom: 40px;
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

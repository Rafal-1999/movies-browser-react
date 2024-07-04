import styled from "styled-components";

export const CardContainer = styled.div`
    height: 650px;
    width: 324px;
    border-radius: 5px;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
`

export const Image = styled.img`
    height: 434px;
    width: 292px;
    border-radius: 5px;
`

export const Info = styled.div`
    margin-top: 16px;
    height: 105px;
`

export const Title = styled.p`
    font-family: Poppins;
    font-weight: 500;
    font-size: 22px;
    margin: 0px;
`

export const Subtitle = styled.p`
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    margin: 8px 0px;
    color: #7E839A;
`

export const TagList = styled.div`
    display: flex;
`

export const Tag = styled.div`
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    background-color: #E4E6F0;
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 5px;
`

export const Rating = styled.div`
    display: flex;
    font-family: Poppins;
    gap: 12px;
    margin-top: 39px;
`

export const StarRating = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #18181B;
`

export const VoteCount = styled.div`
    color: #7E839A;
`
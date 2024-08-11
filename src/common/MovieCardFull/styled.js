import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    display: flex;
`

export const Image = styled.img`
    border-radius: 5px;
    height: 464px;
    width: 312px;
    margin: 40px;
`

export const Info = styled.div`
    margin: 40px;
    margin-left: 0px;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    margin: 0px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`

export const Subtitle = styled.p`
    margin: 24px 0px;
    font-size: 22px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        margin: 4px 0px 8px 0px;
    }
`
export const DetailBox = styled.div`

`

export const Production = styled.p`
    margin: 0px;
`

export const Release = styled.p`
    margin: 0px;
    margin-top: 8px;
`

export const Label = styled.span`
    color: #74788B;
`

export const TagList = styled.div`
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
`

export const Tag = styled.div`
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    background-color: #E4E6F0;
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 5px;
    margin-top: 4px;
`

export const Rating = styled.div`
    display: flex;
    margin-top: 24px;
    align-items: baseline;
`

export const StarRating = styled.span`
    font-size: 22px;
    height: 22px;
    font-weight: 500;
`

export const OutOf = styled.span`
    font-weight: 400;
    font-size: 14px;
`

export const VoteCount = styled.span`
    font-weight: 400;
    font-size: 14px;
    margin-left: 12px;
`

export const Description = styled.div`
    margin-top: 24px;
    font-size: 20px;
`

export const Star = styled.svg`
    align-self: center;
    margin-right: 8px;
`

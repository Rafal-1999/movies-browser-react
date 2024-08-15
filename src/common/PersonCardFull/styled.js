import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 132px 1fr;
  }
`;

export const Image = styled.img`
  height: 564px;
  width: 399px;
  margin: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 163px;
    width: 116px;
    margin: 16px;
  }
`;
export const Info = styled.div`
  margin: 40px;
  margin-left: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px;
  }
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 36px;
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 14px;
  }
`;
export const Birth = styled.p`
  font-weight: 400;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;
export const Label = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const Description = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const DescriptionMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: initial;
    margin: 16px;
    font-weight: 400;
    font-size: 14px;
    display: grid;
    grid-column: 1 / -1;
  }
`;

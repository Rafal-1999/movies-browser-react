import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
`;

export const Image = styled.image`
  height: 564px;
  width: 399px;
  margin: 40px;
`;
export const Info = styled.div`
  margin: 40px;
  margin-left: 0px;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 36px;
  margin: 0px;
`;
export const Birth = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
export const label = styled.span`
  color: ${({ theme }) => theme.color.stormGray};
`;

export const Description = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 20px;
`;

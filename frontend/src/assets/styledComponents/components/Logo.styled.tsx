import styled from "styled-components";

const LogoContainer = styled.div`
  cursor: pointer;
  gap: 10px;
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 19px;
  min-height: 38px;
`;

export const LogoHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fsLogo};
  font-family: Prata;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.clr1};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default LogoContainer;

import styled, { css } from "styled-components";
import { respondTo } from "../../theme/responsive";

const HeroContainer = styled.div`
  display: flex;
  padding-left: 80px;
  padding-right: 36px;
  margin-top: 151px;
`;

export const HeroContent = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  ${respondTo.laptopBreakpoint`
  text-align:center;
  align-items:center;
  `}
`;

export const HeroHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.fsXxl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.clr2};
  line-height: 70px;
`;

export const HeroSubHeader = styled.h3`
  max-width: 480px;
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.clr3};
  line-height: 40.13px;
`;

export const HeroImage = styled.img`
  min-width: 450px;
  max-height: 526px;
  ${respondTo.laptopBreakpoint`
    display: none; 
  `}
`;

export default HeroContainer;

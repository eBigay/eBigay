import styled from "styled-components";
import RespondTo from "../../theme/responsive";

const HeroContainer = styled.div`
  display: flex;
  padding-left: 80px;
  padding-right: 36px;
  margin-top: 151px;
  ${RespondTo.laptopBreakpoint`
  padding: 0 5rem;
  `}
  ${RespondTo.mobileBreakpoint`
   padding: 0 2rem
  `}
`;

export const HeroContent = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  ${RespondTo.laptopBreakpoint`
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
  ${RespondTo.laptopBreakpoint`
    display: none; 
  `}
`;

export default HeroContainer;

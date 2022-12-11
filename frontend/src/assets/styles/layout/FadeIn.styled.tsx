import styled, { keyframes } from "styled-components";
import RespondTo from "../../theme/responsive";

const fadeInAnimation = keyframes`
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`;

const FadeIn = styled.div`
  animation: ${fadeInAnimation} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const FadeInErrorMessage = styled(FadeIn)`
  color: ${({ theme }) => theme.colors.clr11};
  font-size: ${({ theme }) => theme.fontSizes.fsSm};
  position: absolute;
  bottom: -25px;
  ${RespondTo.mobileBreakpoint`
  bottom: -40%;
`}
`;

export default FadeIn;

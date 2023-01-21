import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`;

const fadeInAndUpAnimation = keyframes`
    0% {
      opacity: 0;
      padding-top: 50px;
    }
  
    100% {
      opacity: 1;
      padding-top: 0;
    }
`;

const FadeIn = styled.div`
  animation: ${fadeInAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const FadeInAndUp = styled.div`
  animation: ${fadeInAndUpAnimation} 0.4s ease both;
`;

export default FadeIn;

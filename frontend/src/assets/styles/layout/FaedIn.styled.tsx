import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`;

export const FadeIn = styled.div`
  animation: ${fadeInAnimation} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

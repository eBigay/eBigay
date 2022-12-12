import styled, { keyframes } from "styled-components";

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

export default FadeIn;

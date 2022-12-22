import styled, { keyframes } from "styled-components";

type SpinnerProps = {
  width: string;
  height: string;
};

const rotateAnimation = keyframes`
  0% {
      stroke-dasharray: 1,98;
      stroke-dashoffset: -105;
  }
  50% {
      stroke-dasharray: 80,10;
      stroke-dashoffset: -160;
  }
  100% {
      stroke-dasharray: 1,98;
      stroke-dashoffset: -300;
  }
`;

export const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  svg {
    width: 100px;
  }
`;

export const Spinner = styled.circle`
  fill: transparent;
  stroke: #fbb527;
  stroke-width: 8px;
  stroke-linecap: round;
  transform-origin: center;
  animation-name: ${rotateAnimation};
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(1, 0.4, 0.4, 1);
  animation-iteration-count: infinite;
`;

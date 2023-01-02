import styled, { keyframes } from "styled-components";

type SpinnerProps = {
  size?: string;
};
type LoadingProps = {
  pos?: string;
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
  transform: scale(
    ${(props) =>
      props.size === "small" ? 0.6 : props.size === "x-small" ? 0.35 : 0.8}
  );
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

const LoadingContainer = styled.div<LoadingProps>`
  width: 100%;
  height: ${(props) => (props.pos === "center" ? "100vh" : "unset")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default LoadingContainer;

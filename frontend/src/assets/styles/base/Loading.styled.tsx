import styled, { keyframes } from "styled-components";
import RespondTo from "../../theme/responsive";

type SpinnerProps = {
  size?: string;
};
type LoadingProps = {
  pos?: string;
  absolutePos?: boolean;
  height?: string;
  marginTop?: string;
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

/* eslint-disable */
export const SpinnerContainer = styled.div.attrs({
  className: "SpinnerContainer",
})<SpinnerProps>`
  transform: scale(
    ${({ size }) => (size === "small" ? 0.6 : size === "xsmall" ? 0.3 : 0.8)}
  );
  svg {
    width: 100px;
  }
`;
/* eslint-enable */

export const Spinner = styled.circle.attrs({ className: "Spinner" })`
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
  height: ${({ pos, height }) =>
    pos === "center" ? "100vh" : height || "unset"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop || "0"};
  position: ${({ absolutePos }) => (absolutePos ? "absolute" : "relative")};
  top: ${({ absolutePos }) => absolutePos && "-35px"};
  ${RespondTo.laptopBreakpoint`
  top: ${({ absolutePos }: any) => absolutePos && "-55px"};
`}
  ${RespondTo.tabletBreakpoint`
  top: ${({ absolutePos }: any) => absolutePos && "-30px"};
`}
`;

export default LoadingContainer;

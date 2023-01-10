import styled from "styled-components";

interface IScreenOverlayContainerProps {
  isMenuOpen?: boolean;
  isItemDetailsOpen?: boolean;
  isLeftContainerOpen?: boolean;
  styleMode?: string;
}

const StyledScreenOverlay = styled.div<IScreenOverlayContainerProps>`
  pointer-events: ${(props) =>
    props.isMenuOpen || props.isItemDetailsOpen || props.isLeftContainerOpen
      ? "unset"
      : "none"};
  cursor: ${(props) =>
    props.isMenuOpen || props.isItemDetailsOpen || props.isLeftContainerOpen
      ? "pointer"
      : "unset"};
  opacity: ${(props) =>
    props.isMenuOpen || props.isItemDetailsOpen || props.isLeftContainerOpen
      ? "100"
      : "0"};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  transition: ${(props) =>
    props.isItemDetailsOpen
      ? "opacity 0.15s ease-in-out"
      : "opacity 0.5s ease-in-out"};

  background-color: ${(props) =>
    props.styleMode === "darken" ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)"};
`;

export default StyledScreenOverlay;

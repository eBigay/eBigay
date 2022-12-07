import { Opacity } from "@mui/icons-material";
import styled from "styled-components";

interface IScreenOverlayContainerProps {
  isMenuOpen?: boolean;
  isProductDetailsOpen?: boolean;
}

const StyledScreenOverlay = styled.div<IScreenOverlayContainerProps>`
  pointer-events: ${(props) =>
    props.isMenuOpen || props.isProductDetailsOpen ? "unset" : "none"};
  cursor: ${(props) =>
    props.isMenuOpen || props.isProductDetailsOpen ? "pointer" : "unset"};
  opacity: ${(props) =>
    props.isMenuOpen || props.isProductDetailsOpen ? "100" : "0"};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  transition: ${(props) =>
    props.isProductDetailsOpen
      ? "opacity 0.2s ease-in-out"
      : "pacity 0.5s ease-in-out"};

  &.darken {
    background-color: rgba(0, 0, 0, 0.64);
  }
  &.heavy-dark {
    background-color: rgba(0, 0, 0, 0.84);
  }
`;

export default StyledScreenOverlay;

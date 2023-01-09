import { MouseEventHandler } from "react";
import StyledScreenOverlay from "../../assets/styles/layout/ScreenOverlay.styled";

interface IOverlayProps {
  styleMode?: string;
  handleClick?: MouseEventHandler<HTMLDivElement>;
  isMenuOpen?: boolean;
  isLeftContainerOpen?: boolean;
  isItemDetailsOpen?: boolean;
}
const ScreenOverlay = ({
  styleMode = "darken",
  handleClick,
  isMenuOpen,
  isItemDetailsOpen,
  isLeftContainerOpen,
}: IOverlayProps) => {
  return (
    <StyledScreenOverlay
      onClick={handleClick}
      isMenuOpen={isMenuOpen}
      isItemDetailsOpen={isItemDetailsOpen}
      isLeftContainerOpen={isLeftContainerOpen}
      styleMode={styleMode}
    />
  );
};

export default ScreenOverlay;

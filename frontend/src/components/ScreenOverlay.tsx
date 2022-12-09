import { MouseEventHandler } from "react";
import StyledScreenOverlay from "../assets/styles/components/ScreenOverlay.styled";

interface IOverlayProps {
  styleMode?: string;
  handleClick?: MouseEventHandler<HTMLDivElement>;
  isMenuOpen?: boolean;
  isProductDetailsOpen?: boolean;
}
const ScreenOverlay = ({
  styleMode = "darken",
  handleClick,
  isMenuOpen,
  isProductDetailsOpen,
}: IOverlayProps) => {
  return (
    <StyledScreenOverlay
      className={`${styleMode}`}
      onClick={handleClick}
      isMenuOpen={isMenuOpen}
      isProductDetailsOpen={isProductDetailsOpen}
    />
  );
};

export default ScreenOverlay;

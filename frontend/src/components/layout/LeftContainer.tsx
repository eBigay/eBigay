import { ReactNode } from "react";
import StyledLeftContainer from "../../assets/styles/layout/LeftContainer.styled";

interface ILeftContainerProps {
  children: ReactNode;
  isLeftContainerOpen: boolean;
}

const LeftContainer = ({
  children,
  isLeftContainerOpen,
}: ILeftContainerProps) => {
  return (
    <StyledLeftContainer isLeftContainerOpen={isLeftContainerOpen}>
      {children}
    </StyledLeftContainer>
  );
};

export default LeftContainer;

import { ReactNode } from "react";
import { StyledLeftContainer } from "../../assets/styles/layout/LeftContainer.styled";

interface ILeftContainerProps {
  children: ReactNode;
  isLeftContainerOpen: boolean;
}

export const LeftContainer = ({
  children,
  isLeftContainerOpen,
}: ILeftContainerProps) => {
  return (
    <StyledLeftContainer isLeftContainerOpen={isLeftContainerOpen}>
      {children}
    </StyledLeftContainer>
  );
};

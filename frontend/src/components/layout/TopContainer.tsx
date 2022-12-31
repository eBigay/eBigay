import { ReactNode } from "react";
import { StyledTopContainer } from "../../assets/styles/layout/TopContainer.styled";

interface ITopContainerProps {
  children: ReactNode;
}

export const TopContainer = ({ children }: ITopContainerProps) => {
  return <StyledTopContainer>{children}</StyledTopContainer>;
};

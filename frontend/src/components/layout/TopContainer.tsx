import { ReactNode } from "react";
import StyledTopContainer from "../../assets/styles/layout/TopContainer.styled";

interface ITopContainerProps {
  children: ReactNode;
}

const TopContainer = ({ children }: ITopContainerProps) => {
  return <StyledTopContainer>{children}</StyledTopContainer>;
};

export default TopContainer;

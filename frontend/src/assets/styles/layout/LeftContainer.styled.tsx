import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

interface IStyledLeftContainer {
  isLeftContainerOpen: boolean;
}

export const StyledLeftContainer = styled.aside<IStyledLeftContainer>`
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  ${RespondTo.laptopBreakpoint`
    position: fixed;
    overflow-y:auto;
    top: 0;
    left: 0;
    padding-top: 3rem;
    width: 40%;
    z-index: 50;
    background-color: ${(props: any) => props.theme.colors.clr4};
    transform: translate(${(props: any) =>
      props.isLeftContainerOpen ? "0" : "-100%"});
      transition: transform 0.5s ease-in-out;

  `}
  ${RespondTo.mobileBreakpoint`
    width: 70%;
    `}
    ${MinWidth.laptopBreakpoint`
    padding-left: 5rem;
    padding-right: 27px;
    `}
`;

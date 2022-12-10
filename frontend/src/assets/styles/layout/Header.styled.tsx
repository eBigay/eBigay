import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RespondTo, { MinWidth } from "../../theme/responsive";

interface IStyledLinksProps {
  isMenuOpen: boolean;
}

export const StyledHeader = styled.div`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 25;
  overflow: hidden;
  min-height: 100px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(186, 167, 167, 0.25);
  ${RespondTo.tabletBreakpoint`
  align-items:center;
  `}
  ${RespondTo.mobileBreakpoint`
   padding: 0 2rem
  `}
    ${MinWidth.wideBreakpoint`
  padding: 0 10rem;
  `}
`;

export const LinksContainer = styled.div<IStyledLinksProps>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 50px;
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  font-family: Poppins;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.clr2};
  ${RespondTo.tabletBreakpoint`
  position: fixed;
		top: 0;
		right: 0;
		z-index: 50;
		width: 65%;
		height: 100%;
		padding-top: 6.9rem;
		flex-direction: column;
		background-color: ${(props: any) => props.theme.colors.clr4};
		transform: ${(props: any) =>
      props.isMenuOpen ? "translateX(0%)" : "translateX(100%)"};
		transition: 0.5s ease-in-out;
  `}
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: unset;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  transition: 0.3s;
  z-index: 1;
  ${RespondTo.tabletBreakpoint`
    height: 10%;

  `}

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: lightgray;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: 0.3s;
  }

  &.active:before {
    opacity: 1;
    background: ${({ theme }) => theme.colors.clr1};
  }

  &:not(.active):hover::before {
    opacity: 1;
    background: lightgray;
  }
`;

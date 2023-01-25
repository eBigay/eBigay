import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Menu, Search } from "@mui/icons-material";
import RespondTo, { MinWidth } from "../../theme/responsive";

interface IStyledLinksProps {
  isMenuOpen: boolean;
}

export const StyledHeader = styled.header`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 25;
  overflow: visible;
  min-height: 5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(186, 167, 167, 0.25);
  ${RespondTo.tabletBreakpoint`
  align-items:center;
  `}
  ${RespondTo.mobileBreakpoint`
    min-height: 4.75rem;
   width: 100%;
   padding: 0 2rem
  `}
    ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
    ${MinWidth.superWideBreakpoint`
  padding: 0 25rem;
  `}
`;

export const LinksContainer = styled.nav<IStyledLinksProps>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 50px;
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  font-family: Poppins;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.clr2};
  ${RespondTo.laptopBreakpoint`
  gap: 30px;
`}
  ${RespondTo.tabletBreakpoint`
  position: fixed;
		top: 0;
		right: 0;
		z-index: 50;
    gap: 50px;
		width: 65%;
		height: 100%;
		padding-top: 6.9rem;
		flex-direction: column;
    justify-content: flex-start;
		background-color: ${({ theme }: any) => theme.colors.clr4};
		transform: ${({ isMenuOpen }: IStyledLinksProps) =>
      isMenuOpen ? "translateX(0%)" : "translateX(100%)"};
		transition: 0.5s ease-in-out;
  `}
`;

export const StyledBottomContainer = styled.div.attrs({
  className: "StyledBottomContainer",
})`
  position: relative;

  ${RespondTo.tabletBreakpoint`
position: absolute;
bottom: 5%;
}`}
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

export const StyledMenu = styled(Menu)`
  && {
    cursor: pointer;
    color: #fbb527;
    font-size: 2rem;
    ${MinWidth.tabletBreakpoint`
    display: none;
  `}
  }
`;
export const StyledSearch = styled(Search)`
  && {
    cursor: pointer;
    color: #fbb527;
    font-size: 2rem;
    align-self: center;
    margin: 0 1rem 0 auto;
  }
  ${MinWidth.tabletBreakpoint`
  &&{
    display: none;
  }
  `}
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const StyledCancelButton = styled.button<IStyledLinksProps>`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  top: 0;
  right: 100%;
  margin: 1.6rem;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  transform: ${({ isMenuOpen }: IStyledLinksProps) =>
    isMenuOpen ? "scale(1)" : "scale(0)"};
  transition: transform 100ms cubic-bezier(0, 0, 0.38, 0.9) 450ms;
  background-color: #fff;
  opacity: ${({ isMenuOpen }: IStyledLinksProps) => (isMenuOpen ? 1 : 0)};
  &:hover {
    background-color: #d9d9d9;
  }
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 50px;
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  font-family: Poppins;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.clr2};
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

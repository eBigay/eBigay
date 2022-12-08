import styled, { css } from "styled-components";
import { respondTo } from "../../theme/responsive";

interface IStyledBurgerMenuProps {
  isMenuOpen: boolean;
}

const StyledBurgerMenu = styled.button<IStyledBurgerMenuProps>`
  display: none;
  ${respondTo.tabletBreakpoint`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 100;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${(props: any) => props.theme.colors.clr1};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${(props: any) =>
          props.isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${(props: any) => (props.isMenuOpen ? "0" : "1")};
        transform: ${(props: any) =>
          props.isMenuOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${(props: any) =>
          props.isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
  `}
`;

export default StyledBurgerMenu;

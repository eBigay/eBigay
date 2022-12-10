import { useState } from "react";
import { StyledHeader } from "../../assets/styles/layout/Header.styled";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import Nav from "./Nav";
import useOverflow from "../../hooks/useOverflow";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useOverflow(isMenuOpen, [isMenuOpen]);

  return (
    <StyledHeader>
      <Logo />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </StyledHeader>
  );
};

export default Header;

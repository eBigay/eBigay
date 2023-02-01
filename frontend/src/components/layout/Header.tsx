import { useEffect, useState } from "react";
import {
  StyledHeader,
  StyledMenu,
  StyledSearch,
} from "../../assets/styles/layout/Header.styled";
import Logo from "./Logo";
import Nav from "./Nav";
import useOverflow from "../../hooks/useOverflow";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => setIsFixed(window.scrollY >= 80));
  }, []);

  useOverflow(isMenuOpen);
  useOverflow(isSearchBarOpen);

  return (
    <StyledHeader isFixed={isFixed} className={isFixed ? "fixed" : ""}>
      <Logo />
      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
      <StyledSearch
        onClick={() => {
          setIsSearchBarOpen(!isSearchBarOpen);
        }}
      />
      <StyledMenu
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </StyledHeader>
  );
};

export default Header;

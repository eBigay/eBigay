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

  useOverflow(isMenuOpen);

  useEffect(() => {
    console.log(isSearchBarOpen);
  }, [isSearchBarOpen]);

  return (
    <StyledHeader>
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

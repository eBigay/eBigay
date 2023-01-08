import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ClearOutlined } from "@mui/icons-material";
import {
  LinksContainer,
  StyledCancelButton,
  StyledLink,
} from "../../assets/styles/layout/Header.styled";
import PrimaryButton from "../../assets/styles/base/Button.styled";
import ScreenOverlay from "./ScreenOverlay";
import SearchForm from "../SearchForm";
import useAuthContext from "../../hooks/useAuthContext";
import useAuth from "../../hooks/useAuth";

interface INavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({
  isMenuOpen,
  setIsMenuOpen,
  isSearchBarOpen,
  setIsSearchBarOpen,
}: INavBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    state: { user },
  } = useAuthContext();

  const { logout } = useAuth();

  const { mutate: logoutUser } = logout;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logoutUser();
    toggleIsMenuOpen();
  };

  return (
    <>
      <ScreenOverlay handleClick={toggleIsMenuOpen} isMenuOpen={isMenuOpen} />
      <SearchForm
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
      <LinksContainer isMenuOpen={isMenuOpen}>
        <StyledLink
          to="/"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </StyledLink>
        <StyledLink
          to="/about"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          About Us
        </StyledLink>
        {user ? (
          <PrimaryButton
            width="172px"
            height="50px"
            fontSize="s"
            onClick={handleLogOut}
          >
            {user.email.split("@")[0]}
          </PrimaryButton>
        ) : (
          <PrimaryButton
            width="172px"
            height="50px"
            fontSize="s"
            onClick={() => {
              navigate("/login");
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            Log in/Sign up
          </PrimaryButton>
        )}

        <StyledCancelButton isMenuOpen={isMenuOpen} onClick={toggleIsMenuOpen}>
          <ClearOutlined fontSize="medium" />
        </StyledCancelButton>
      </LinksContainer>
    </>
  );
};

export default Nav;

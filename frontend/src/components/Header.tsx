import { useNavigate } from "react-router-dom";
import {
  LinksContainer,
  StyledHeader,
  StyledLink,
} from "../assets/styledComponents/layout/Header.styled";
import PrimaryButton from "../assets/styledComponents/base/Button.styled";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo />
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <PrimaryButton
          width="172px"
          height="50px"
          fontSize="s"
          onClick={() => navigate("/login")}
        >
          Log in/Sign up
        </PrimaryButton>
      </LinksContainer>
    </StyledHeader>
  );
};

export default Header;

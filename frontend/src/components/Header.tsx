import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/images/MainLogo.png";
import {
  LinksContainer,
  Logo,
  StyledHeader,
  StyledLink,
} from "../assets/styledComponents/layout/Header.styled";
import PrimaryButton from "../assets/styledComponents/base/Button.styled";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo
        onClick={() => {
          navigate("/");
          window.scroll({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={MainLogo} alt="main-logo-eBigay" />
        <h1>eBigay</h1>
      </Logo>

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

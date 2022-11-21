import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/images/MainLogo.png";
import StyledLogo from "../assets/styledComponents/components/Logo.styled";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <StyledLogo
      onClick={() => {
        navigate("/");
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={MainLogo} alt="main-logo-eBigay" />
      <h1>eBigay</h1>
    </StyledLogo>
  );
};
export default Logo;

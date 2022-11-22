import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/images/MainLogo.png";
import LogoContainer, {
  LogoHeader,
  LogoImage,
} from "../assets/styledComponents/components/Logo.styled";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoContainer
      onClick={() => {
        navigate("/");
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <LogoImage src={MainLogo} alt="main-logo-eBigay" />
      <LogoHeader>eBigay</LogoHeader>
    </LogoContainer>
  );
};
export default Logo;

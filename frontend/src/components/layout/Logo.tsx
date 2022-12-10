import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/images/MainLogo.png";
import LogoContainer, {
  LogoHeader,
  LogoImage,
} from "../../assets/styles/components/Logo.styled";

interface LogoProps {
  noNavigate?: boolean;
}

const Logo = ({ noNavigate }: LogoProps) => {
  const navigate = useNavigate();
  return (
    <LogoContainer
      onClick={() => {
        if (!noNavigate) {
          navigate("/");
          window.scroll({ top: 0, behavior: "smooth" });
        }
      }}
      noNavigate={noNavigate}
    >
      <LogoImage src={MainLogo} alt="eBigay" />
      <LogoHeader>eBigay</LogoHeader>
    </LogoContainer>
  );
};
export default Logo;

import { VolunteerActivism } from "@mui/icons-material";
import { useNavigate } from "react-router";
import HeroImg from "../assets/images/HeroImg.png";
import PrimaryButton from "../assets/styles/base/Button.styled";
import HeroContainer, {
  ButtonsWrapper,
  HeroContent,
  HeroHeader,
  HeroImage,
  HeroSubHeader,
} from "../assets/styles/components/Hero.styled";
import Text from "../data/enums";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeader>{Text.HeroHeader}</HeroHeader>
        <HeroSubHeader>{Text.HeroSubHeader}</HeroSubHeader>
        <ButtonsWrapper>
          <PrimaryButton
            width="161px"
            height="50px"
            fontSize="s"
            onClick={() => {
              navigate("/search");
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            Explore More
          </PrimaryButton>
          <PrimaryButton
            width="161px"
            height="50px"
            fontSize="s"
            onClick={() => {
              navigate("/addNew");
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            Give a Product
            <VolunteerActivism fontSize="medium" />
          </PrimaryButton>
        </ButtonsWrapper>
      </HeroContent>
      <HeroImage src={HeroImg} alt="" />
    </HeroContainer>
  );
};

export default Hero;

import { useNavigate } from "react-router";
import HeroImg from "../assets/images/HeroImg.png";
import PrimaryButton from "../assets/styles/base/Button.styled";
import HeroContainer, {
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
        <PrimaryButton
          width="161px"
          height="50px"
          fontSize="s"
          onClick={() => navigate("/search")}
        >
          Explore More
        </PrimaryButton>
      </HeroContent>
      <HeroImage src={HeroImg} alt="" />
    </HeroContainer>
  );
};

export default Hero;

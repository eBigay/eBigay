import React from "react";
import HeroImg from "../assets/images/HeroImg.png";
import PrimaryButton from "../assets/styles/base/Button.styled";
import HeroContainer, {
  HeroContent,
  HeroHeader,
  HeroImage,
  HeroSubHeader,
} from "../assets/styles/components/Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeader>Join Positive Karma Movement Today</HeroHeader>
        <HeroSubHeader>
          Give away long forgotten item another chance to serve the humanity
        </HeroSubHeader>
        <PrimaryButton width="161px" height="50px" fontSize="s">
          Explore more
        </PrimaryButton>
      </HeroContent>
      <HeroImage src={HeroImg} alt="" />
    </HeroContainer>
  );
};

export default Hero;

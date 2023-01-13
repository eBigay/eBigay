import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Arrow from "../assets/svgs/Vector74.svg";
import Image from "../assets/images/AboutUs.svg";
import StyledAbout, {
  AboutUsHeader,
  AboutUsImage,
  AboutUsText,
  BackImage,
  BackLink,
  BackLinkContainer,
} from "../assets/styles/pages/AboutUs.styled";
import Text from "../data/enums";
import FadeIn from "../assets/styles/layout/FadeIn.styled";

const About = () => {
  const navigate = useNavigate();
  const [hoverBack, setHoverBack] = useState<boolean>(false);

  return (
    <FadeIn>
      <StyledAbout>
        <BackLinkContainer
          onClick={() => navigate(-1)}
          onMouseOver={() => setHoverBack(true)}
          onMouseLeave={() => setHoverBack(false)}
        >
          <BackImage src={Arrow} alt="" hover={hoverBack} />
          <BackLink>Back</BackLink>
        </BackLinkContainer>
        <AboutUsHeader>About Us</AboutUsHeader>
        <AboutUsImage className="aboutUsImage" src={Image} alt="" />
        <AboutUsText className="aboutUsDescription">
          {Text.AboutText}
        </AboutUsText>
      </StyledAbout>
    </FadeIn>
  );
};

export default About;

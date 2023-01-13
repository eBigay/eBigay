import { useNavigate } from "react-router-dom";
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

const About = () => {
  const navigate = useNavigate();
  return (
    <StyledAbout>
      <BackLinkContainer onClick={() => navigate(-1)}>
        <BackImage src={Arrow} alt="" />
        <BackLink>Back</BackLink>
      </BackLinkContainer>
      <AboutUsHeader>About Us</AboutUsHeader>
      <AboutUsImage className="aboutUsImage" src={Image} alt="" />
      <AboutUsText className="aboutUsDescription">{Text.AboutText}</AboutUsText>
    </StyledAbout>
  );
};

export default About;

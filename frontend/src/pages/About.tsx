import { Link } from "react-router-dom";
import Arrow from "../assets/svgs/Vector74.svg";
import Image from "../assets/images/AboutUs.svg";
import StyledAbout, {
  AboutUsHeader,
  AboutUsImage,
  AboutUsText,
  BackImage,
  BackLink,
} from "../assets/styles/pages/AboutUs.styled";
import Text from "../data/enums";

const About = () => {
  return (
    <StyledAbout className="fade-in">
      <Link to="../">
        <BackImage src={Arrow} alt="" />
        <BackLink>Back</BackLink>
      </Link>
      <AboutUsHeader>About Us</AboutUsHeader>
      <AboutUsImage className="aboutUsImage" src={Image} alt="" />
      <AboutUsText className="aboutUsDescription">{Text.AboutText}</AboutUsText>
    </StyledAbout>
  );
};

export default About;

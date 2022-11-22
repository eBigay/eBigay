import { Link } from "react-router-dom";
import Arrow from "../assets/svgs/Vector74.svg";
import Image from "../assets/images/AboutUs.svg";
import StyledAbout, {
  AboutUsHeader,
  AboutUsImage,
  AboutUsText,
  BackImage,
  BackLink,
} from "../assets/styledComponents/pages/AboutUs.styled";

const About = () => {
  return (
    <StyledAbout className="fade-in">
      <Link to="../">
        <BackImage src={Arrow} alt="" />
        <BackLink>Back</BackLink>
      </Link>
      <AboutUsHeader>About Us</AboutUsHeader>
      <AboutUsImage className="aboutUsImage" src={Image} alt="" />
      <AboutUsText className="aboutUsDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
        purus felis, ac fermentum erat feugiat eu. Sed pellentesque erat arcu,
        non scelerisque lacus porta sed. Fusce libero neque, congue eu purus
        ultricies, rhoncus luctus nunc. Nullam quis convallis quam. Quisque
        bibendum pharetra justo. Aenean semper ante sed ipsum semper, sit amet
        iaculis ante convallis. Nam fringilla justo sed nibh pharetra rhoncus.
        Nullam feugiat posuere feugiat. Sed porttitor justo eget sapien
        tristique, a hendrerit tortor tempor. In cursus volutpat diam. Morbi
        tincidunt turpis et nulla ornare, eu aliquet justo pretium. Curabitur
        euismod venenatis cursus. Suspendisse efficitur arcu sed augue feugiat
        lacinia.
      </AboutUsText>
    </StyledAbout>
  );
};

export default About;

import FooterContainer, {
  Copyrights,
  FooterHR,
  FooterText,
} from "../../assets/styles/layout/Footer.styled";
import Logo from "./Logo";
import Text from "../../data/enums";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <FooterText>{Text.FooterText}</FooterText>
      <FooterHR />
      <Copyrights>{Text.CopyRights}</Copyrights>
    </FooterContainer>
  );
};

export default Footer;

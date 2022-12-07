import FooterContainer, {
  Copyrights,
  FooterHR,
  FooterText,
} from "../../assets/styles/layout/Footer.styled";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <FooterText>
        Although the eBigay platform is free, we show ads to maintain it for the
        community. Payments for developers, servers and domain hosting. All to
        make sure this platform stays free for everyone, enjoy!
      </FooterText>
      <FooterHR />
      <Copyrights>© All rights reserved 2022</Copyrights>
    </FooterContainer>
  );
};

export default Footer;

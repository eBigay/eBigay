import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer flex column align-center justify-center">
      <Logo />
      <p>
        Although the eBigay platform is free, we show ads to maintain it for the
        community. Payments for developers, servers and domain hosting. All to
        make sure this platform stays free for everyone, enjoy!
      </p>
      <hr className="footer-line" />
      <h3>© All rights reserved 2022</h3>
    </div>
  );
};

export default Footer;

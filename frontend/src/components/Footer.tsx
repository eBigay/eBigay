import MainLogo from "../assets/images/MainLogo.png";

const Footer = () => {
  return (
    <div className="footer flex column align-center justify-center">
      <div className="footer-logo flex align-center">
        <img src={MainLogo} alt="main-logo-eBigay" />
        <h1>eBigay</h1>
      </div>
      <p>
        Althoygh the eBigay platform is free, we show ads to maintain it for the
        community. Payments for developers, servers and domain hosting. All to
        make sure this playform stays free for everyone, enjoy!
      </p>
      <hr className="footer-line" />
      <h3>© All rights reserved 2022</h3>
    </div>
  );
};

export default Footer;

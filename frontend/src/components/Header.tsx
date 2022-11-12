import { NavLink, useNavigate } from "react-router-dom";
import MainLogo from "../assets/images/MainLogo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header flex justify-space-between">
      <div
        className="header-logo flex align-center"
        onClick={() => {
          navigate("/");
          window.scroll({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={MainLogo} alt="main-logo-eBigay" />
        <h1 className="fs28">eBigay</h1>
      </div>
      <div className="nav-links flex align-center fs18">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active" + " clean-link" : "clean-link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active" + " clean-link" : "clean-link"
          }
          to="/about"
        >
          About Us
        </NavLink>
        <button
          className="primary-btn clean-btn fs16"
          onClick={() => navigate("/login")}
        >
          Log in/Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;

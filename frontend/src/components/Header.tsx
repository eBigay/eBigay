import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header flex justify-space-between">
      <Logo />
      <div className="nav-links flex align-center">
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active clean-link" : "clean-link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "is-active clean-link" : "clean-link"
          }
          to="/about"
        >
          About Us
        </NavLink>
        <button
          type="button"
          className="primary-btn clean-btn"
          onClick={() => navigate("/login")}
        >
          Log in/Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;

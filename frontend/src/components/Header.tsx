import { NavLink } from "react-router-dom"
import MainLogo from "../assets/images/MainLogo.png"



const Header = () => {
  return (
    <div className="header flex justify-space-between">
<div className="header-logo flex align-center">
     <img src={MainLogo} alt="main-logo-eBigay" />
     <h1>eBigay</h1> 
   </div>
<div className="nav-links clean-list flex align-center">
            <NavLink className={navData => (navData.isActive ? 'is-active' + ' clean-link' : 'clean-link')} to="/">Home</NavLink> 
            <NavLink className={navData => (navData.isActive ? 'is-active' + ' clean-link' : 'clean-link')} to="/about">Abouts us</NavLink> 
            <button className="login-btn primary-btn clean-btn">Log in/Sign up</button>
        </div>
    </div>
  )
}

export default Header
import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  //This class is used to style active links
  const customClass = ({ isActive }) => {
    return "navbar__link" + (isActive ? "-active" : ""); //if isActive is true add '-active' to navbar__link class
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar__image" />
      {/* NavBar */}
      <nav className="navbar__list">
        <NavLink to="/" className={customClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={customClass}>
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

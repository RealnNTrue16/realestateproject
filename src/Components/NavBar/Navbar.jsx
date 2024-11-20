import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar__image" />

      <div>
        <ul className="navbar__list">
          <li className="navbar__option">About</li>
          <li className="navbar__option">Availability</li>
          <li className="navbar__option">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

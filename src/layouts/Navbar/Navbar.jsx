import { FaBars, FaGripLines } from "react-icons/fa";
import "./Navbar.scss";
import logo from "./../../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} alt="this is logo fable" />
        </div>
        <div className="bars">
          <FaGripLines />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

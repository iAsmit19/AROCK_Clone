import {
  navbar_cont,
  navbar_housing,
} from "../../stylesheets/index.module.css";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

const Navbar = () => {
  return (
    <div className={navbar_cont}>
      <div className={navbar_housing}>
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;

import { nav_logo } from "../../stylesheets/index.module.css";
import arockLogo from "/src/assets/logos/arock-logo.svg";

const Logo = () => {
  return (
    <div>
      <img className={nav_logo} src={arockLogo} alt="" />
    </div>
  );
};

export default Logo;

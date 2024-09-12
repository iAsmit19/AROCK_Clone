import { nav_logo } from "../../stylesheets/index.module.css";

const Logo = () => {
  return (
    <div>
      <img className={nav_logo} src="./public/arock-logo.svg" alt="" />
    </div>
  );
};

export default Logo;

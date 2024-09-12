import { nav_logo } from "../../stylesheets/index.module.css";

const Logo = () => {
  return (
    <div>
      <img className={nav_logo} src="./src/assets/logos/arock-logo.svg" alt="A" />
    </div>
  );
};

export default Logo;

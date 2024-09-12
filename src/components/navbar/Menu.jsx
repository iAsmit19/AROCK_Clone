import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { nav_menu } from "../../stylesheets/index.module.css";

const Menu = () => {
  const { setMenuToggle } = useContext(GlobalContext);

  const menuClickHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <div className={nav_menu} onClick={menuClickHandler}>
      <p>MENU</p>
    </div>
  );
};

export default Menu;

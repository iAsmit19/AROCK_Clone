import { useContext } from "react";
import { GlobalContext } from "../../../context/Context";
import { menu_navbar } from "../../../stylesheets/index.module.css";

const MenuNavbar = () => {
  const { setMenuToggle } = useContext(GlobalContext);

  const menuClickHandler = () => {
    setMenuToggle((prev) => !prev);
  };
  return (
    <div className={menu_navbar}>
      <p onClick={menuClickHandler}>CLOSE</p>
    </div>
  );
};

export default MenuNavbar;

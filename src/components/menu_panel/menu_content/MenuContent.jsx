import {
  menu_content,
  menu_content_cont,
} from "../../../stylesheets/index.module.css";
import Logo from "../../navbar/Logo";
import MenuInfo from "./MenuInfo";
import MenuNav from "./MenuNav";
import MenuNavbar from "./MenuNavbar";

const MenuContent = () => {
  return (
    <div className={menu_content}>
      <div className={menu_content_cont}>
        <MenuNavbar />
        <Logo />
        <MenuNav />
        <MenuInfo />
      </div>
    </div>
  );
};

export default MenuContent;

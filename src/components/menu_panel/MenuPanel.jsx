import { menu_panel } from "../../stylesheets/index.module.css";
import MenuContent from "./menu_content/MenuContent";
import MenuImage from "./menu_image/MenuImage";

const MenuPanel = () => {
  return (
    <div className={menu_panel}>
      <MenuImage />
      <MenuContent />
    </div>
  );
};

export default MenuPanel;

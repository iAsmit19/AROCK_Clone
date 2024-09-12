import {
  menu_img,
  menu_img_cont,
  menu_img_image,
} from "../../../stylesheets/index.module.css";
import { Tilt } from "@jdion/tilt-react";

const MenuImage = () => {
  return (
    <div className={menu_img}>
      <div className={menu_img_cont}>
        <Tilt className={menu_img_image}>
          <img
            className={menu_img_image}
            src="./src/assets/backgrounds/ZiEy4fPdc1huKnJf_AROCK-_1473[inverted].webp"
            alt=""
          />
        </Tilt>
      </div>
    </div>
  );
};

export default MenuImage;

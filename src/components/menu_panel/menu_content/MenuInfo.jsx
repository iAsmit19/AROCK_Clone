import { useEffect, useRef } from "react";
import {
  menu_info,
  menu_info_cont,
  menu_info_items,
  git_block,
} from "../../../stylesheets/index.module.css";
import gsap from "gsap";

const MenuInfo = () => {
  const gitBlockRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gitBlockRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        yoyo: true,
        repeat: -1,
        ease: "expo.inOut",
      }
    );
  });

  return (
    <div className={menu_info}>
      <div className={menu_info_cont}>
        <div className={menu_info_items}>
          <p>
            FOLLOW <br /> (AROCK®)
          </p>
          <p>
            INSTAGRAM <br /> YOUTUBE
          </p>
        </div>
        <div className={menu_info_items}>
          <p>
            LISTEN <br /> (AROCK®)
          </p>
          <p>
            SPOTIFY <br /> MIXCLOUD
          </p>
        </div>
        <div className={menu_info_items}>
          <div className={git_block} ref={gitBlockRef}></div>
          <p>GET IN TOUCH</p>
          <p>
            EMAIL <img src="./src/assets/icons/arrow.svg" alt="" />
          </p>
        </div>
        <div className={menu_info_items}>
          <p>
            SAN DIEGO <br />
            8PM MUSIC <br />
            1000 NATIONAL AVE <br />
            SAN DIEGO, CA 92123
          </p>
          <p>
            los angeles <br />
            6255 sunset blvd. <br />
            suite #700 <br />
            los angeles, ca 90028
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;

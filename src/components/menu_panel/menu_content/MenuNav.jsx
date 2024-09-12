import { useRef } from "react";
import {
  menu_nav,
  menu_nav_cont,
  nav_links,
} from "../../../stylesheets/index.module.css";
import gsap from "gsap";

const MenuNav = () => {
  const pNav1 = "ABOUT";
  const pNav2 = "STORY";
  const pNav3 = "PROJECTS";
  const pNav4 = "RELEASES";

  const pNav1Ref = useRef([]);
  const pNav1Ref1 = useRef([]);

  const pNav2Ref = useRef([]);
  const pNav2Ref2 = useRef([]);

  const pNav3Ref = useRef([]);
  const pNav3Ref3 = useRef([]);

  const pNav4Ref = useRef([]);
  const pNav4Ref4 = useRef([]);

  const navHover = {
    y: -50,
    duration: 0.5,
    stagger: 0.03,
    // transform: "translateZ(200px)",
  };
  
  const navHoverOut = {
    y: 0,
    transform: "translate(0)",
    duration: 0.5,
    stagger: 0.03,
  };

  const nav1MouseEnter = () => {
    gsap.to(pNav1Ref.current, navHover);
    gsap.to(pNav1Ref1.current, navHover);
  };
  const nav2MouseEnter = () => {
    gsap.to(pNav2Ref.current, navHover);
    gsap.to(pNav2Ref2.current, navHover);
  };
  const nav3MouseEnter = () => {
    gsap.to(pNav3Ref.current, navHover);
    gsap.to(pNav3Ref3.current, navHover);
  };
  const nav4MouseEnter = () => {
    gsap.to(pNav4Ref.current, navHover);
    gsap.to(pNav4Ref4.current, navHover);
  };

  const nav1MouseLeave = () => {
    gsap.to(pNav1Ref.current, navHoverOut);
    gsap.to(pNav1Ref1.current, navHoverOut);
  };
  const nav2MouseLeave = () => {
    gsap.to(pNav2Ref.current, navHoverOut);
    gsap.to(pNav2Ref2.current, navHoverOut);
  };
  const nav3MouseLeave = () => {
    gsap.to(pNav3Ref.current, navHoverOut);
    gsap.to(pNav3Ref3.current, navHoverOut);
  };
  const nav4MouseLeave = () => {
    gsap.to(pNav4Ref.current, navHoverOut);
    gsap.to(pNav4Ref4.current, navHoverOut);
  };

  return (
    <div className={menu_nav}>
      <div className={menu_nav_cont}>
        <div
          className={nav_links}
          onMouseEnter={nav1MouseEnter}
          onMouseLeave={nav1MouseLeave}
        >
          <p>
            {pNav1.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav1Ref.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
          <p>
            {pNav1.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav1Ref1.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div
          className={nav_links}
          onMouseEnter={nav2MouseEnter}
          onMouseLeave={nav2MouseLeave}
        >
          <p>
            {pNav2.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav2Ref.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
          <p>
            {pNav2.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav2Ref2.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div
          className={nav_links}
          onMouseEnter={nav3MouseEnter}
          onMouseLeave={nav3MouseLeave}
        >
          <p>
            {pNav3.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav3Ref.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
          <p>
            {pNav3.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav3Ref3.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div
          className={nav_links}
          onMouseEnter={nav4MouseEnter}
          onMouseLeave={nav4MouseLeave}
        >
          <p>
            {pNav4.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav4Ref.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
          <p>
            {pNav4.split("").map((char, index) => (
              <span
                key={index}
                ref={(element) => (pNav4Ref4.current[index] = element)}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;

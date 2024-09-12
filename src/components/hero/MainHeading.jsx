import { useContext, useRef } from "react";
import { main_heading, mainHeadR } from "../../stylesheets/index.module.css";
import gsap from "gsap";
import { useEffect } from "react";
import { GlobalContext } from "../../context/Context";

const MainHeading = () => {
  const mainHeadRef = useRef([]);
  const mainHeadText = "AROCK";

  const { lineComp } = useContext(GlobalContext);

  useEffect(() => {
    if (lineComp) {
      gsap.fromTo(
        mainHeadRef.current,
        {
          y: 500,
          transform: "rotate(20deg)",
        },
        {
          y: 0,
          transform: "rotate(0deg)",
          duration: 1,
          ease: "expo.inOut",
          stagger: 0.1,
          delay: 0,
        }
      );
    }
  }, [lineComp]);

  return (
    <div className={main_heading}>
      <h1>
        {mainHeadText.split("").map((char, index) => (
          <span
            key={index}
            ref={(element) => (mainHeadRef.current[index] = element)}
          >
            {char}
          </span>
        ))}
        <span className={mainHeadR}>®</span>
      </h1>
    </div>
  );
};

export default MainHeading;

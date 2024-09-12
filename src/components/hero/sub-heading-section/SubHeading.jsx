import { useContext, useEffect, useRef } from "react";
import {
  sub_heading,
  film_player,
  sub_location,
  sub_text,
  sub_loc,
} from "../../../stylesheets/index.module.css";
import playerSVG from "/src/assets/icons/player.svg";
import { GlobalContext } from "../../../context/Context";
import gsap from "gsap";

const SubHeading = () => {
  const { lineComp } = useContext(GlobalContext);

  const playerRef = useRef(null);
  const subTextRef = useRef(null);
  const subRefs = [playerRef.current, subTextRef.current];

  useEffect(() => {
    if (lineComp) {
      gsap.fromTo(
        subRefs,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.2,
          ease: "expo.inOut",
          delay: 0.8,
        }
      );
    }
  });

  return (
    <div className={sub_heading}>
      <div className={film_player} ref={playerRef}>
        <img src={playerSVG} alt="" />
        <p>
          PLAY <br /> THE FILM
        </p>
      </div>
      <div className={sub_location}>
        <div className={sub_text} ref={subTextRef}>
          <p>CURATOR</p>
          <p>CREATOR</p>
        </div>
        <div className={sub_loc}>
          <p>NEW YORK</p>
          <p>LOS ANGELES</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;

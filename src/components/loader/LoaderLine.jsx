import { useEffect, useRef } from "react";
import {
  loader_line,
  loader_line_load,
} from "../../stylesheets/index.module.css";
import gsap from "gsap";

const LoaderLine = ({ onComplete }) => {
  const loadLineRef = useRef(null);

  const loaderTl = gsap.timeline();

  useEffect(() => {
    loaderTl.to(loadLineRef.current, {
      width: "80%",
      ease: "expo.inOut",
      duration: 2.3,
      delay: 0.5,
      onComplete,
    });
    loaderTl.to(loadLineRef.current, {
      x: 2000,
      duration: 1.4,
      ease: "expo.inOut",
    });
  }, [onComplete, loaderTl]);

  return (
    <div className={loader_line}>
      <div className={loader_line_load} ref={loadLineRef}></div>
    </div>
  );
};

export default LoaderLine;

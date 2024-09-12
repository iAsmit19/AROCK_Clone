import { useContext, useEffect, useRef } from "react";
import { loader_cont } from "../../stylesheets/index.module.css";
import LoaderLine from "./LoaderLine";
import gsap from "gsap";
import { GlobalContext } from "../../context/Context";

const Loader = () => {
  const loaderRef = useRef(null);

  const { lineComp, setLineComp } = useContext(GlobalContext);

  const handleLineComplete = () => {
    setLineComp(true);
  };

  useEffect(() => {
    if (lineComp) {
      gsap.fromTo(
        loaderRef.current,
        {
          y: 0,
        },
        {
          height: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    }
  });

  return (
    <div className={loader_cont} ref={loaderRef}>
      <LoaderLine onComplete={handleLineComplete} />
    </div>
  );
};

export default Loader;

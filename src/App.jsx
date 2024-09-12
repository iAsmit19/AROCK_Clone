import { global_cont } from "./stylesheets/index.module.css";
import Loader from "./components/loader/Loader";
import MenuPanel from "./components/menu_panel/MenuPanel";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { GlobalContext } from "./context/Context";

const App = () => {
  const mainRef = useRef(null);
  const { menuToggle } = useContext(GlobalContext);

  const menuTl = gsap.timeline();

  useEffect(() => {
    if (menuToggle) {
      menuTl.to(mainRef.current, {
        scale: 0.9,
      });
      menuTl.to(mainRef.current, {
        y: "-100vh",
        opacity: 0.5,
        duration: 0.5,
        ease: "expo.inOut",
      });
      menuTl.to(mainRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.inOut",
      });
    } else {
      menuTl.to(mainRef.current, {
        scale: 0.9,
      });
      menuTl.to(mainRef.current, {
        y: 0,
        opacity: 0.5,
        duration: 0.5,
        ease: "expo.inOut",
      });
      menuTl.to(mainRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.inOut",
      });
    }
  });
  return (
    <div className={global_cont} ref={mainRef}>
      {/* <Loader /> */}
      <Navbar />
      <Hero />
      <MenuPanel />
    </div>
  );
};

export default App;

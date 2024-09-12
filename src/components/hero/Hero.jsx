import { main_cont } from "../../stylesheets/index.module.css";
import MainHeading from "./MainHeading";
import SubHeading from "./sub-heading-section/SubHeading";

const Hero = () => {
  return (
    <div className={main_cont}>
      <MainHeading />
      <SubHeading />
    </div>
  );
};
export default Hero;

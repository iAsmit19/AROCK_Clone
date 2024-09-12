import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./stylesheets/index.module.css";
import Context from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
      <App />
  </Context>
);

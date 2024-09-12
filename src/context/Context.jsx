import { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [lineComp, setLineComp] = useState(false);

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        lineComp,
        setLineComp,
        menuToggle,
        setMenuToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

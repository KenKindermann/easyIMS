import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [darkOverlay, setDarkOverlay] = useState(false);
  const value = { darkOverlay, setDarkOverlay };

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};

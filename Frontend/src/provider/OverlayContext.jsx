import { createContext, useState } from "react";

export const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [darkOverlay, setDarkOverlay] = useState(false);
  const value = { darkOverlay, setDarkOverlay };

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>;
};

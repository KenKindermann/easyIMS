// Hooks
import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [darkOverlay, setDarkOverlay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const value = { darkOverlay, setDarkOverlay, showPopup, setShowPopup };

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};

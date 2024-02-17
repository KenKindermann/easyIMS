// Context
import { useContext } from "react";
import { PopupContext } from "../provider/PopupContext";

const usePopup = () => {
  const { setShowPopup, setDarkOverlay } = useContext(PopupContext);

  // Open popup and show dark overlay
  const openPopup = (action) => {
    setShowPopup(action);
    setDarkOverlay(true);
  };

  // Close popup and hide  dark overlay
  const closePopup = () => {
    setShowPopup(false);
    setDarkOverlay(false);
  };

  return { openPopup, closePopup };
};

export default usePopup;

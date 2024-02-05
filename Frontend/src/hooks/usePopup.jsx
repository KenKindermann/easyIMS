import { useContext } from "react";
import { PopupContext } from "../provider/PopupContext";

const usePopup = () => {
  const { setShowPopup, setDarkOverlay } = useContext(PopupContext);

  const openPopup = (action) => {
    setShowPopup(action);
    setDarkOverlay(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setDarkOverlay(false);
  };

  return { openPopup, closePopup };
};

export default usePopup;

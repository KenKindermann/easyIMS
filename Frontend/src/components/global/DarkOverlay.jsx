import { useContext } from "react";
import { PopupContext } from "../../provider/PopupContext";
import "../../style/overlay.css";

const DarkOverlay = () => {
  const { darkOverlay, setDarkOverlay, setShowPopup } = useContext(PopupContext);
  return (
    <div
      className={darkOverlay ? "dark-overlay" : null}
      onClick={() => {
        setDarkOverlay(false), setShowPopup(false);
      }}
    ></div>
  );
};

export default DarkOverlay;

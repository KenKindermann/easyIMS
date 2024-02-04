import { useContext } from "react";
import { OverlayContext } from "../../provider/OverlayContext";
import "../../style/overlay.css";

const DarkOverlay = () => {
  const { darkOverlay, setDarkOverlay } = useContext(OverlayContext);
  return <div className={darkOverlay ? "dark-overlay" : null} onClick={() => setDarkOverlay(false)}></div>;
};

export default DarkOverlay;

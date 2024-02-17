// CSS
import "../../style/popup.css";

// Context
import { useContext } from "react";
import { PopupContext } from "../../provider/PopupContext";

// Popups
import AddPopup from "../popups/AddPopup";
import EditPopup from "../popups/EditPopup";
import SearchPopup from "../popups/SearchPopup";

const Popup = () => {
  const { showPopup, setShowPopup, setDarkOverlay } = useContext(PopupContext);

  const components = {
    Add: AddPopup,
    Edit: EditPopup,
    Search: SearchPopup,
  };

  const CurrentComponent = components[showPopup];

  return (
    showPopup && (
      <div className="popup">
        <div className="header">
          <p>{showPopup}</p>
          <img
            className="close-btn"
            src="/assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
            alt="close button"
            onClick={() => {
              setShowPopup(false), setDarkOverlay(false);
            }}
          />
        </div>
        <CurrentComponent />
      </div>
    )
  );
};

export default Popup;

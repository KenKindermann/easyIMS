import "../../style/popup.css";
import closeBtn from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useEffect } from "react";
import { PopupContext } from "../../provider/PopupContext";
import { TableContext } from "../../provider/TableContext";
import AddPopup from "../popups/AddPopup";
import EditPopup from "../popups/EditPopup";
import AlertPopup from "../popups/AlertPopup";

const Popup = () => {
  const { showPopup, setShowPopup, setDarkOverlay } = useContext(PopupContext);

  const components = {
    Add: AddPopup,
    Edit: EditPopup,
    Alert: AlertPopup,
  };

  const CurrentComponent = components[showPopup];

  useEffect(() => {
    console.log(showPopup?.message);
  }, [showPopup]);

  return (
    showPopup && (
      <div className="popup">
        <div className="header">
          <p>{showPopup}</p>
          <img
            className="close-btn"
            src={closeBtn}
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

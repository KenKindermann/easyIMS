import "../../style/popup.css";
import closeBtn from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useEffect } from "react";
import { PopupContext } from "../../provider/PopupContext";
import { TableContext } from "../../provider/TableContext";

const Popup = () => {
  const { showPopup, setShowPopup, setDarkOverlay } = useContext(PopupContext);
  const { currentTable } = useContext(TableContext);

  useEffect(() => {
    console.log(currentTable);
  }, [currentTable]);

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
        <div className="input-area">
          {currentTable?.keys.map(
            (key, index) =>
              index > 0 && (
                <input
                  type="text"
                  key={key}
                  name={key}
                  placeholder={currentTable.labels[index]}
                  autoFocus={index === 1}
                />
              )
          )}
          <button>{showPopup}</button>
        </div>
      </div>
    )
  );
};

export default Popup;

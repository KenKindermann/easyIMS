import { useContext, useEffect } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";

const EditPopup = () => {
  const { currentTable, selectedItems } = useContext(TableContext);
  const { showPopup } = useContext(PopupContext);

  return (
    <div className="input-area">
      {currentTable?.keys.map(
        (key, index) =>
          index > 0 && (
            <input
              type="text"
              key={key}
              name={key}
              defaultValue={selectedItems[0][key]}
              placeholder={currentTable.labels[index]}
              autoFocus={index === 1}
            />
          )
      )}
      <button>{showPopup}</button>
    </div>
  );
};

export default EditPopup;

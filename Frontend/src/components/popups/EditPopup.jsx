import { useContext, useEffect } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";
import { DataContext } from "../../provider/DataContext";
import usePopup from "../../hooks/usePopup";

const EditPopup = () => {
  const { selectedItems } = useContext(TableContext);
  const { activeState } = useContext(DataContext);

  const { showPopup } = useContext(PopupContext);
  const { closePopup } = usePopup();
  const { putData } = useAxios();

  const url = `http://localhost:8000/${activeState.title}`;

  const handleSubmit = (e) => {
    const id = selectedItems[0].id;
    e.preventDefault();
    closePopup();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    putData(url, data, id, true);
  };

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
      {activeState.table.keys?.map(
        (key, index) =>
          index > 0 && (
            <input
              type="text"
              key={key}
              name={key}
              defaultValue={selectedItems[0][key]}
              placeholder={activeState.table.labels[index]}
              autoFocus={index === 1}
            />
          )
      )}
      <button type="submit">{showPopup}</button>
    </form>
  );
};

export default EditPopup;

import { useContext, useEffect } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";

const EditPopup = () => {
  const { currentTable, selectedItems } = useContext(TableContext);
  const { showPopup } = useContext(PopupContext);
  const { putData } = useAxios();

  const url = `http://localhost:8000/${currentTable.title}`;

  const handleSubmit = (e) => {
    const id = selectedItems[0].id;
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    putData(url, data, id);
  };

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
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
      <button type="submit">{showPopup}</button>
    </form>
  );
};

export default EditPopup;

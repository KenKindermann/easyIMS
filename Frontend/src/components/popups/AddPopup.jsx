import { useContext } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";

const AddPopup = () => {
  const { currentTable } = useContext(TableContext);
  const { showPopup } = useContext(PopupContext);
  const { postData } = useAxios();

  const url = `http://localhost:8000/${currentTable.title}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    postData(url, data);
  };

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
      {currentTable?.keys.map(
        (key, index) =>
          index > 0 && (
            <input type="text" key={key} name={key} placeholder={currentTable.labels[index]} autoFocus={index === 1} />
          )
      )}
      <button type="submit">{showPopup}</button>
    </form>
  );
};

export default AddPopup;

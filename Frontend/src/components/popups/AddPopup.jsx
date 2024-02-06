import { useContext } from "react";
import "../../style/popup.css";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";
import usePopup from "../../hooks/usePopup";

const AddPopup = () => {
  const { currentTable } = useContext(TableContext);
  const { showPopup } = useContext(PopupContext);
  const { closePopup } = usePopup();
  const { postData } = useAxios();

  const url = `http://localhost:8000/${currentTable.title}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    closePopup();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    console.log(data);
    postData(url, data);
  };

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
      {currentTable?.keys.map(
        (key, index) =>
          index > 0 && (
            <input
              type={currentTable.types[index]}
              key={key}
              name={key}
              placeholder={currentTable.labels[index]}
              autoFocus={index === 1}
              required={currentTable.required.includes(key)}
            />
          )
      )}
      <button type="submit">{showPopup}</button>
    </form>
  );
};

export default AddPopup;

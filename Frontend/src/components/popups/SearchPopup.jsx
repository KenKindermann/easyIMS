import React, { useContext, useState } from "react";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";

const SearchPopup = () => {
  const { currentTable } = useContext(TableContext);
  const { showPopup } = useContext(PopupContext);
  const [formData, setFormData] = useState({});
  const { searchData } = useAxios();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryString = Object.entries(formData)
      .filter(([value]) => value !== "")
      .map(([name, value]) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
      .join("&");

    const url = `http://localhost:8000/${currentTable.title}/search?${queryString}`;
    searchData(url);
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
              onChange={handleChange}
            />
          )
      )}
      <button type="submit">{showPopup}</button>
    </form>
  );
};

export default SearchPopup;

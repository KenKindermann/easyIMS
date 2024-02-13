import React, { useContext, useState } from "react";
import { TableContext } from "../../provider/TableContext";
import { PopupContext } from "../../provider/PopupContext";
import useAxios from "../../hooks/useAxios";
import { DataContext } from "../../provider/DataContext";
import usePopup from "../../hooks/usePopup";

const SearchPopup = () => {
  const { activeState } = useContext(DataContext);
  const { showPopup } = useContext(PopupContext);
  const [formData, setFormData] = useState({});
  const { searchData } = useAxios();
  const { closePopup } = usePopup();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closePopup();

    const queryString = Object.entries(formData)
      .filter(([value]) => value !== "")
      .map(([name, value]) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
      .join("&");

    const url = `http://localhost:8000/${activeState.title}/search?${queryString}`;
    searchData(url);
  };

  return (
    <form className="input-area" onSubmit={(e) => handleSubmit(e)}>
      {activeState?.table.keys.map(
        (key, index) =>
          index > 0 && (
            <input
              key={key}
              name={key}
              placeholder={activeState?.table.labels[index]}
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

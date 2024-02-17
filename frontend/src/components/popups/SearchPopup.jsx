// Hooks
import { useContext, useState } from "react";
import useAxios from "../../hooks/useAxios";
import usePopup from "../../hooks/usePopup";

// Context
import { PopupContext } from "../../provider/PopupContext";
import { DataContext } from "../../provider/DataContext";

const SearchPopup = () => {
  const { activeState } = useContext(DataContext);
  const { showPopup } = useContext(PopupContext);
  const [formData, setFormData] = useState({});
  const { searchData } = useAxios();
  const { closePopup } = usePopup();

  // Add target name and value to formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Close popup and create query string for search data in db
  const handleSubmit = (e) => {
    e.preventDefault();
    closePopup();

    const queryString = Object.entries(formData)
      .filter(([value]) => value !== "")
      .map(([name, value]) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
      .join("&");

    const url = `https://easyims.onrender.com/${activeState.title}/search?${queryString}`;
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

// CSS
import "../../style/button.css";

// Icons
import addIcon from "../../assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg";
import editIcon from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import deleteIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import sortIcon from "../../assets/icons/sort_FILL0_wght400_GRAD0_opsz24.svg";
import checkIcon from "../../assets/icons/check_FILL0_wght400_GRAD0_opsz24.svg";
import downloadIcon from "../../assets/icons/download_FILL0_wght400_GRAD0_opsz24.svg";

// Hooks
import usePopup from "../../hooks/usePopup";
import { useContext, useState } from "react";
import { TableContext } from "../../provider/TableContext";
import useAxios from "../../hooks/useAxios";

// Components
import DropDown from "../global/DropDown";
import { DataContext } from "../../provider/DataContext";

const icons = {
  Add: addIcon,
  Edit: editIcon,
  Delete: deleteIcon,
  Search: searchIcon,
  Sort: sortIcon,
  Check: checkIcon,
  Download: downloadIcon,
};

// ------------- BUTTONS ------------- //

// Custom
export const CustomButton = ({ onClick, title, icon }) => {
  return (
    <button img={icons[icon]} onClick={onClick}>
      <img src={icons[icon]} alt="title icon" /> {title}
    </button>
  );
};

// OpenPopup
export const OpenPopup = ({ title }) => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup(title)}>
      <img src={icons[title]} alt={`${title} icon`} /> {title}
    </button>
  );
};

// Edit
export const Edit = () => {
  const { selectedItems } = useContext(TableContext);
  const { openPopup } = usePopup();

  const handleClick = () => {
    const numberOfSelectedItems = selectedItems.length;
    if (numberOfSelectedItems !== 1) {
      showAlert(numberOfSelectedItems);
    } else {
      openPopup("Edit");
    }
  };

  const showAlert = (quantity) => {
    const message = quantity > 1 ? "More than on entry selected." : "No entry selected.";
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      <img src={editIcon} alt={"edit icon"} /> Edit
    </button>
  );
};

// Delete
export const Delete = () => {
  const { deleteData } = useAxios();
  const { selectedItems } = useContext(TableContext);
  const { activeState } = useContext(DataContext);

  const handleClick = () => {
    const url = `https://easyims.onrender.com/${activeState.title}`;
    deleteData(url, selectedItems);
  };

  return (
    <button onClick={() => handleClick()}>
      <img src={deleteIcon} alt={"delete icon"} /> Delete
    </button>
  );
};

// Search
export const Search = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={searchIcon} alt={"search icon"} /> Search
    </button>
  );
};

// Sort
export const Sort = () => {
  const [showDropDown, setShowDropdown] = useState(false);

  return (
    <button onClick={() => setShowDropdown(!showDropDown)}>
      <img src={sortIcon} alt={"sort icon"} /> Sort
      {showDropDown && <DropDown />}
    </button>
  );
};

// Dropdown
export const Dropdown = ({ title, items }) => {
  const [showDropDown, setShowDropdown] = useState(false);

  return (
    <button onClick={() => setShowDropdown(!showDropDown)}>
      <img src={sortIcon} alt={"sort icon"} /> {title}
      {showDropDown && <DropDown items={items} />}
    </button>
  );
};

// CSS
import "../../style/button.css";

// Icons
import addIcon from "../../assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg";
import editIcon from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import deleteIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import sortIcon from "../../assets/icons/sort_FILL0_wght400_GRAD0_opsz24.svg";

// Hooks
import usePopup from "../../hooks/usePopup";
import { useContext, useState } from "react";
import { TableContext } from "../../provider/TableContext";
import useAxios from "../../hooks/useAxios";

// Components
import DropDown from "../global/DropDown";

// ------------- BUTTONS ------------- //

// Add
export const Add = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Add")}>
      <img src={addIcon} alt={"add icon"} /> Add
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
  const { currentTable, selectedItems } = useContext(TableContext);

  const handleClick = () => {
    const url = `http://localhost:8000/${currentTable.title}`;
    deleteData(url, selectedItems);
  };

  return (
    <button onClick={() => handleClick()}>
      <img src={deleteIcon} alt={"delete icon"} /> Delete
    </button>
  );
};

// Search
export const Search = () => {
  const { openPopup } = usePopup();

  return (
    <button onClick={() => openPopup("Search")}>
      <img src={searchIcon} alt={"search icon"} /> Search
    </button>
  );
};

// Sort
export const Sort = () => {
  const { currentTable } = useContext(TableContext);
  const [showDropDown, setShowDropdown] = useState(false);

  return (
    <button onClick={() => setShowDropdown(!showDropDown)}>
      <img src={sortIcon} alt={"sort icon"} /> Sort
      {showDropDown && <DropDown currentTable={currentTable} />}
    </button>
  );
};

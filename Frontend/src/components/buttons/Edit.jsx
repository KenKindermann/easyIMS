import "../../style/button.css";
import editIcon from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";
import { useContext } from "react";
import { TableContext } from "../../provider/TableContext";

const Edit = () => {
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

export default Edit;

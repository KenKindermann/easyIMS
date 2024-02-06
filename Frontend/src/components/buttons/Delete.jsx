import "../../style/button.css";
import deleteIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import usePopup from "../../hooks/usePopup";
import useAxios from "../../hooks/useAxios";
import { useCallback, useContext, useEffect } from "react";
import { TableContext } from "../../provider/TableContext";

const Delete = () => {
  const { openPopup } = usePopup();
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

export default Delete;

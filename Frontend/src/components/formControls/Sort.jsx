import "../../style/button.css";
import sortIcon from "../../assets/icons/sort_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../provider/TableContext";
import DropDown from "../global/DropDown";

const Sort = () => {
  const { currentTable } = useContext(TableContext);
  const [showDropDown, setShowDropdown] = useState(false);

  return (
    <button onClick={() => setShowDropdown(!showDropDown)}>
      <img src={sortIcon} alt={"sort icon"} /> Sort
      {showDropDown && <DropDown currentTable={currentTable} />}
    </button>
  );
};

export default Sort;

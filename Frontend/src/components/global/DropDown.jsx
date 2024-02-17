// CSS
import "../../style/dropdown.css";

// Hooks
import useAxios from "../../hooks/useAxios";

// Context
import { useContext } from "react";
import { DataContext } from "../../provider/DataContext";

const DropDown = () => {
  const { sortData } = useAxios();
  const { activeState } = useContext(DataContext);

  // Sort data by clicked item in Dropdown
  const handleClick = (index) => {
    const key = activeState.table.keys[index];
    const url = `https://easyims.onrender.com/${activeState.title}/sort/${key}`;
    sortData(url);
  };

  return (
    <div className="drop-down">
      <ul>
        {activeState?.table?.labels?.map((item, index) => (
          <li key={item} onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;

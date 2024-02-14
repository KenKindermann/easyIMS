// CSS
import "../../style/dropdown.css";

// Hooks
import useAxios from "../../hooks/useAxios";

// Context
import { useContext } from "react";
import { DataContext } from "../../provider/DataContext";

const DropDown = ({ items }) => {
  const { sortData } = useAxios();
  const { activeState } = useContext(DataContext);

  // Sort data by clicked item in Dropdown
  const handleClick = (index) => {
    const key = activeState.table.keys[index];
    const url = `http://localhost:8000/${activeState.title}/sort/${key}`;
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

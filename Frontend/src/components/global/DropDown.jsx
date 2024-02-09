import "../../style/dropdown.css";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { DataContext } from "../../provider/DataContext";

const DropDown = () => {
  const { sortData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);

  const handleClick = (index) => {
    const key = activeState.table.keys[index];
    const url = `http://localhost:8000/${activeState.title}/sort/${key}`;
    sortData(url);
  };

  return (
    <div className="drop-down">
      <ul>
        {activeState.table.labels.map((item, index) => (
          <li onClick={() => handleClick(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;

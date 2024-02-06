import "../../style/dropdown.css";
import useAxios from "../../hooks/useAxios";

const DropDown = ({ currentTable }) => {
  const { sortData } = useAxios();

  const handleClick = (index) => {
    const key = currentTable.keys[index];
    const url = `http://localhost:8000/${currentTable.title}/sort/${key}`;
    sortData(url);
  };

  return (
    <div className="drop-down">
      <ul>
        {currentTable.labels.map((item, index) => (
          <li onClick={() => handleClick(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;

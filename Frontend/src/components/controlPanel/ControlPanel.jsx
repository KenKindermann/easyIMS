import { useContext, useEffect, useState } from "react";
import React from "react";
import "../../style/controlPanel.css";
import useAxios from "../../hooks/useAxios";
import { TableContext } from "../../provider/TableContext";

const ControlPanel = ({ controls }) => {
  const [inputValue, setInputValue] = useState("");
  const { currentTable } = useContext(TableContext);
  const { searchData } = useAxios();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const url = `http://localhost:8000/${currentTable.title}/search?ean=${inputValue}`;
    searchData(url);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const updatedControls = React.Children.map(controls, (control) => {
    if (control.props.name === "IdInput") {
      return React.cloneElement(control, { onChange: handleInputChange });
    } else if (control.props.name === "search") {
      return React.cloneElement(control, { onClick: handleClick });
    }
    {
      return control;
    }
  });

  return <section className="control-panel">{updatedControls}</section>;
};

export default ControlPanel;

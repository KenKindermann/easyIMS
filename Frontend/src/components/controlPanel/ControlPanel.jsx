import { useContext, useEffect, useState } from "react";
import React from "react";
import "../../style/controlPanel.css";
import useAxios from "../../hooks/useAxios";
import { TableContext } from "../../provider/TableContext";

const ControlPanel = ({ controls }) => {
  const [inputValue, setInputValue] = useState("");
  const { data, currentTable, receivingData, setReceivingData } = useContext(TableContext);
  const { searchData } = useAxios();

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleClick = () => {
  //   const url = `http://localhost:8000/${currentTable.db}/search?ean=${inputValue}`;
  //   const add = receivingData.length > 0 ? true : false;
  //   searchData(url, receivingData, setReceivingData, add);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleClick();
  //   }
  // };

  // useEffect(() => {
  //   console.log("ANGEKOMMEN", receivingData);
  // }, [receivingData]);

  // const updatedControls = React.Children.map(controls, (control) => {
  //   if (control.props.name === "IdInput") {
  //     return React.cloneElement(control, { onChange: handleInputChange, onKeyDown: handleKeyDown, key: receivingData });
  //   } else if (control.props.name === "search") {
  //     return React.cloneElement(control, { onClick: handleClick });
  //   }
  //   {
  //     return control;
  //   }
  // });

  return <section className="control-panel">{controls}</section>;
};

export default ControlPanel;

import React, { useContext, useEffect, useRef, useState } from "react";
import ControlPanel from "../controlPanel/ControlPanel";
import InputField from "../formControls/InputField";
import { Search } from "../formControls/Buttons";
import Table from "../table/Table.jsx";
import useAxios from "../../hooks/useAxios";
import { DataContext } from "../../provider/DataContext";
import { receiving } from "../../utils/tableFormatter";

const Receiving = () => {
  const [receivingData, setReceivingData] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const { searchData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);
  const inputRef = useRef();

  const url = "http://localhost:8000/products";

  useEffect(() => {
    setActiveState({ title: "Receiving", setData: setReceivingData, table: receiving });
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const url = `http://localhost:8000/products/search?ean=${inputValue}`;
    const add = receivingData.length > 0 ? true : false;
    searchData(url, receivingData, setReceivingData, add);
  };

  const handleKeyDown = () => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <ControlPanel
        controls={[
          <InputField
            name="IdInput"
            placeholder="Product No or EAN"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />,
          <Search key="searchButton" name="search" function="searchData" onClick={handleClick} />,
        ]}
      />
      <Table data={receivingData} setReceivingData={setReceivingData} />
    </>
  );
};

export default Receiving;

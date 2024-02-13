import React, { useContext, useEffect, useRef, useState } from "react";
import ControlPanel from "../controlPanel/ControlPanel";
import InputField from "../formControls/InputField";
import { CustomButton, Search } from "../formControls/Buttons";
import Table from "../table/Table.jsx";
import useAxios from "../../hooks/useAxios";
import { DataContext } from "../../provider/DataContext";
import { receiving } from "../../utils/tableFormatter";

const Receiving = () => {
  const [receivingData, setReceivingData] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [reload, setReload] = useState(false);
  const { searchData, putData } = useAxios();
  const { setActiveState } = useContext(DataContext);

  const url = "http://localhost:8000/products";

  useEffect(() => {
    setActiveState({ title: "Receiving", data: receivingData, setData: setReceivingData, table: receiving });
  }, [receivingData]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const url = `http://localhost:8000/products/search?ean=${inputValue}`;
    const add = receivingData.length > 0 ? true : false;
    searchData(url, add);
  };

  const handleKeyDown = () => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const bookReceiving = () => {
    receivingData.map((receiving) => {
      putData(url, receiving, receiving.id);
    });

    setReceivingData([]);
  };

  return (
    <>
      <ControlPanel
        controls={[
          <InputField
            key="inputField"
            placeholder="Product No or EAN"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />,
          <Search key="searchButton" name="search" function="searchData" onClick={handleClick} />,
          <CustomButton key="bookReceivingButton" onClick={bookReceiving} title="Book receiving" icon={"Check"} />,
        ]}
      />
      <Table data={receivingData} setReceivingData={setReceivingData} />
    </>
  );
};

export default Receiving;

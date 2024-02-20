// Hooks
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

// Buttons
import { CustomButton, Search } from "../formControls/Buttons";
import Table from "../table/Table.jsx";

// Context
import { DataContext } from "../../provider/DataContext";

// Utils
import { receiving } from "../../utils/tableFormatter";

// Components
import ControlPanel from "../controlPanel/ControlPanel";
import InputField from "../formControls/InputField";
import { successToast } from "../../utils/toasts.js";

const Receiving = () => {
  const [receivingData, setReceivingData] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const { searchData, putData } = useAxios();
  const { setActiveState } = useContext(DataContext);

  const url = "https://easyims.onrender.com/products";

  // Set active state to receiving when page is loading
  useEffect(() => {
    setActiveState({ title: "Receiving", data: receivingData, setData: setReceivingData, table: receiving });
  }, [receivingData]);

  // Set value of input field when it changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Search data when button gets clicked
  const handleClick = () => {
    const url = `https://easyims.onrender.com/products/search?ean=${inputValue}`;
    const add = receivingData.length > 0 ? true : false;
    searchData(url, add);
  };

  // Execute handleClick function when key is enter
  const handleKeyDown = () => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  // Put data to db
  const bookReceiving = () => {
    receivingData.map((receiving) => {
      putData(url, receiving, receiving.id);
    });

    setReceivingData([]);
    successToast("Receiving recorded");
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

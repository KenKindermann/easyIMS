// Hooks
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios.jsx";

// Context
import { DataContext } from "../../provider/DataContext.jsx";

// Utils
import { products } from "../../utils/tableFormatter.js";

// Buttons
import { Delete, Edit, OpenPopup, Sort } from "../formControls/Buttons";

// Components
import ControlPanel from "../controlPanel/ControlPanel";
import Table from "../table/Table.jsx";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);

  const url = "https://easyims.onrender.com/products";

  // Set active state to products when page is loading
  useEffect(() => {
    setActiveState({ title: "Products", setData: setProductData, table: products });
  }, []);

  // Get data when activeState changes
  useEffect(() => {
    getData(url);
  }, [activeState]);

  return (
    <>
      <ControlPanel
        controls={[
          <OpenPopup key="add" title="Add" />,
          <Edit key="edit" />,
          <Delete key="delete" />,
          <OpenPopup key="search" title="Search" />,
          <Sort key="sort" />,
        ]}
      />
      <Table data={productData} />
    </>
  );
};

export default Products;

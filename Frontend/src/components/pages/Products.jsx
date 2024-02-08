import ControlPanel from "../controlPanel/ControlPanel";
import Table from "../table/Table.jsx";
import useAxios from "../../hooks/useAxios.jsx";

import { Delete, Edit, OpenPopup, Sort } from "../formControls/Buttons";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../provider/DataContext.jsx";
import { products } from "../../utils/tableFormatter.js";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const { getData } = useAxios();
  const { activeState, setActiveState } = useContext(DataContext);

  const url = "http://localhost:8000/products";

  useEffect(() => {
    setActiveState({ title: "Products", setData: setProductData, table: products });
  }, []);

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

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";
import Popup from "./components/global/Popup";
import { OpenPopup, Edit, Delete, Search, Sort } from "./components/formControls/Buttons";

import InputField from "./components/formControls/InputField";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/customers"
          element={
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
              <Table table={"customers"} />
            </>
          }
        />

        <Route
          path="/products"
          element={
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
              <Table table={"products"} />
            </>
          }
        />

        <Route
          path="/receiving"
          element={
            <>
              <ControlPanel
                controls={[
                  <InputField key="inputField" name="IdInput" placeholder="Product No or EAN" />,
                  <Search key="searchButton" name="search" function="searchData" />,
                ]}
              />
              <Table table={"products"} />
            </>
          }
        />
      </Routes>
      <Popup />
      <DarkOverlay />
    </>
  );
}

export default App;

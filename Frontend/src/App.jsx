import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";
import Popup from "./components/global/Popup";
import { Add, Edit, Delete, Search, Sort } from "./components/formControls/Buttons";

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
                  <Add key="add" />,
                  <Edit key="edit" />,
                  <Delete key="delete" />,
                  <Search key="search" />,
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
                  <Add key="add" />,
                  <Edit key="edit" />,
                  <Delete key="delete" />,
                  <Search key="search" />,
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
                  <InputField settings={{ placeholder: "Product No or EAN" }} />,
                  <Search key="searchButton" />,
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

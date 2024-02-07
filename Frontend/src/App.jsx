import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";
import Popup from "./components/global/Popup";
import Add from "./components/formControls/Add";
import Search from "./components/formControls/Search";
import Edit from "./components/formControls/Edit";
import Delete from "./components/formControls/Delete";
import Sort from "./components/formControls/Sort";

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
                  <Add key="addButton" />,
                  <Edit key="editButton" />,
                  <Delete key="deleteButton" />,
                  <Search key="searchButton" />,
                  <Sort key="sortButton" />,
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
                  <Add key="addButton" />,
                  <Edit key="editButton" />,
                  <Delete key="deleteButton" />,
                  <Search key="searchButton" />,
                  <Sort key="sortButton" />,
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
              <ControlPanel controls={[<Search key="searchButton" />]} />
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

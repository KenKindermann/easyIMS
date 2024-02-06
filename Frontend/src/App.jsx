import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";
import Popup from "./components/global/Popup";
import Add from "./components/buttons/Add";
import Search from "./components/buttons/Search";
import Edit from "./components/buttons/Edit";
import Delete from "./components/buttons/Delete";
import Sort from "./components/buttons/Sort";

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
                buttons={[
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
                buttons={[
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
      </Routes>
      <Popup />
      <DarkOverlay />
    </>
  );
}

export default App;

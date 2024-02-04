import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";
import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/customers"
          element={
            <>
              <ControlPanel />
              <Table table={"customers"} />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <ControlPanel />
              <Table table={"products"} />
            </>
          }
        />
      </Routes>
      <DarkOverlay />
    </>
  );
}

export default App;

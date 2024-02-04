import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Table from "./components/table/Table";

function App() {
  return (
    <>
      <Navbar />
      <ControlPanel />
      <Table />
      <Routes>
        <Route path="/customers" />
      </Routes>
      <DarkOverlay />
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import ControlPanel from "./components/controlPanel/ControlPanel";

function App() {
  return (
    <>
      <Navbar />
      <ControlPanel />
      <Routes>
        <Route path="/customers" />
      </Routes>
      <DarkOverlay />
    </>
  );
}

export default App;

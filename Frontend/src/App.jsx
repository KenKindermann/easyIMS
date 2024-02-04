import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/customers" />
      </Routes>
      <DarkOverlay />
    </>
  );
}

export default App;

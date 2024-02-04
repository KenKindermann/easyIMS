import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/customers" />
      </Routes>
    </>
  );
}

export default App;

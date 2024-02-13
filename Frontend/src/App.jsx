import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import DarkOverlay from "./components/global/DarkOverlay";
import Popup from "./components/global/Popup";
import Customers from "./components/pages/Customers";
import Products from "./components/pages/Products";
import Receiving from "./components/pages/Receiving";
import Documents from "./components/pages/Documents";
import Invoice from "./components/pages/Invoice";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/receiving" element={<Receiving />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/documents/invoices" element={<Invoice />} />
      </Routes>

      <Popup />
      <DarkOverlay />
    </>
  );
}

export default App;

// CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Libraries
import { ToastContainer } from "react-toastify";

// Components
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
        <Route path="/" element={<Navigate to="/documents" replace />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/receiving" element={<Receiving />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/documents/invoices" element={<Invoice />} />
      </Routes>

      <Popup />
      <DarkOverlay />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;

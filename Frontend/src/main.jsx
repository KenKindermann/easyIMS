import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./provider/PopupContext.jsx";
import { TableProvider } from "./provider/TableContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <PopupProvider>
          <App />
        </PopupProvider>
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>
);

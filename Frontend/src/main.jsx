import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { OverlayProvider } from "./provider/OverlayContext.jsx";
import { TableProvider } from "./provider/TableContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <OverlayProvider>
          <App />
        </OverlayProvider>
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>
);

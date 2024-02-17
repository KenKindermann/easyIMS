import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./provider/PopupContext.jsx";
import { TableProvider } from "./provider/TableContext.jsx";
import { DataProvider } from "./provider/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <TableProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </TableProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

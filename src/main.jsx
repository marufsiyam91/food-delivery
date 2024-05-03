import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import FoodieContextProvider from "./Contexts/FoodieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodieContextProvider>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </FoodieContextProvider>
  </React.StrictMode>
);

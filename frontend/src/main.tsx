import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RootContextProvider from "./context/RootContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>
);

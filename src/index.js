import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <GlobalStyle />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

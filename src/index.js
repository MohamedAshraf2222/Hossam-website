import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BagContextProvider } from "./context/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BagContextProvider>
      <App />
    </BagContextProvider>
  </React.StrictMode>
);

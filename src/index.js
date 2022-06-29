import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/jumbotron/global-styles";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

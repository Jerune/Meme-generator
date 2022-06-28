// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import "./styles/main.css";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainContent />
  </React.StrictMode>
);

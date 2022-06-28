// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import "./styles/main.css";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Form />
    <Meme />
  </React.StrictMode>
);

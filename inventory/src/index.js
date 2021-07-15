import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function Info() {
  return (
    <div>
      <h1>Inventory</h1>
      <p>Manage your inventory</p>
    </div>
  );
}

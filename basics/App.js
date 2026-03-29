import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {}, [
  React.createElement("h1", {}, [
    "NEW START",
    React.createElement("p", {}, "NEW END"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello From jsxHeading</h1>
console.log(jsxHeading);


//JSX is transpiled before it reaches JS by Parcel -> Babel

//JSX => React.createElement => ReactElement- JS Object => HTMLElement
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
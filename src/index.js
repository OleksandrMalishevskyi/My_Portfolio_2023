import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./assests/font-awesome/css/all.css";

// import { BaseProvider, LightTheme } from "baseui";
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";


// const engine = new Styletron();

createRoot(document.getElementById("root")).render(
  // <StyletronProvider value={engine}>
  // <BaseProvider theme={LightTheme}>
  <App />,
  // </BaseProvider>,
  // </StyletronProvider>,
  
);

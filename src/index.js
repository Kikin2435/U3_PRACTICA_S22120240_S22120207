/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

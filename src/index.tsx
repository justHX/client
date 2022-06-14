import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "components";
import Routing from "./Routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  </StrictMode>
);

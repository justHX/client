import { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import Routing from "./Routing";

import Users from "./data/Users";

const user = new Users();

export const Context = createContext({ user });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Context.Provider value={{ user }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </Context.Provider>
  </StrictMode>
);

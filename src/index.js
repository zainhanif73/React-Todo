import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Counter1 from "./Counter1";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Username = createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="counter1" element={<Counter1 value={"Zain Hanif"} />} />
        <Route
          path="counter"
          element={
            <Username.Provider value={"Osama Hanif"}>
              <Counter />
            </Username.Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export { Username };

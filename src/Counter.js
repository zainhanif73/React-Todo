import React, { useContext } from "react";
import { Username } from "./index";

const Counter = () => {
  let username = useContext(Username);
  return (
    <div style={{ fontSize: "100px", textAlign: "center" }}>{username}</div>
  );
};

export default Counter;

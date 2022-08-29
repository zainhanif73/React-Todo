import React from "react";

const Counter = (props) => {
  return (
    <div style={{ fontSize: "100px", textAlign: "center" }}>{props.value}</div>
  );
};

export default Counter;

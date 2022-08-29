import React, { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };

    case "toggleShowText":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    showText: "This is the text",
  });

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
          dispatch({
            type: "toggleShowText",
          });
        }}
      >
        Click Here
      </button>
      {state.showText && "This is the text"}
    </>
  );
}

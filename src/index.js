// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

const counterState = observable({ count: 0 });

const App = observer(() => {
  const handleIncrement = () => {
    counterState.count++;
  };
  const handleDecrement = () => {
    counterState.count--;
  };
  return (
    <>
      <h1>{counterState.count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

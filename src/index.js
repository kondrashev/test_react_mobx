// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { observable, action, makeObservable } from "mobx";
import { observer } from "mobx-react";

const handleIncrement = () => {
  counterState.count++;
};
const handleDecrement = () => {
  counterState.count--;
};
const counterState = {
  count: 0,
  handleIncrement,
  handleDecrement,
};
makeObservable(counterState, {
  count: observable,
  handleIncrement: action,
  handleDecrement: action,
});
const App = observer(() => {
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

import React from "react";
import "./App.css";

import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Timer {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
}

const timer = new Timer();

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const App = () => (
  <div className="App">
    <h2>ReactJS with mobX (Functional Component)</h2>
    <button onClick={() => timer.decrement()}>Decrement</button>
    {timer.value}
    <button onClick={() => timer.increment()}>Increment</button>
  </div>
);

export default observer(App);

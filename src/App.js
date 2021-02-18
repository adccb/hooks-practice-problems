import React, { useState } from "react";
import "./App.css";
import { Callback, Ref } from "./components/";

const App = () => {
  const [callbackState, setCallbackState] = useState("null");
  const [refState, setRefState] = useState("null");

  return (
    <div className="App">
      <Callback onChange={setCallbackState} />
      <p>parent component value: {callbackState}</p>
      <hr />
      <Ref onChange={setRefState} />
      <p>active button: {refState?.name}</p>
    </div>
  );
};

export default App;

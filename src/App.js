import React, { useState } from "react";
import "./App.css";
import { Callback, Ref } from "./components/";

const App = () => {
  const [callbackState, setCallbackState] = useState("null");
  const [refState, setRefState] = useState("null");

  const createEntity = (val) => ({ val, created_at: Date.now() });

  return (
    <div className="App">
      <Callback onChange={setCallbackState} createEntity={createEntity} />
      <p>parent component value: {callbackState?.val}</p>
      <hr />
      <Ref onChange={setRefState} />
      <p>active button: {refState?.name}</p>
    </div>
  );
};

export default App;

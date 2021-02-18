import React, { useState } from "react";

// this input records updates on blur. currently, though, it
// won't update its parent component when it updates its
// internal state. we should make it so it does update its caller,
// and we should make it only do so on an actual value change.
//
// i.e. if the user types "the", <blur>, <focus>, "t<backspace>", <blur>,
// the onChange event should not be fired. the field state was the same on
// both blur events.
const Callback = ({ onChange }) => {
  const [inputVal, setInputVal] = useState("");
  return <input type="text" onBlur={(e) => setInputVal(e.target.value)} />;
};

export default Callback;

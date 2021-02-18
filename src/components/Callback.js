import React, { useState, useCallback, useEffect } from "react";

// this component tracks change events on blur. we should
// make it track change events and rehydrate them with an api
// function to send to the parent via onChange.
//
// issue is, this api function is really heavyweight, so
// we only want to recompute that function call when the
// entity itself changes.
const Callback = ({ onChange, createEntity }) => {
  const [inputVal, setInputVal] = useState("");

  // compute the function only one time per input change
  const submit = useCallback(() => onChange(createEntity(inputVal)), [
    inputVal,
  ]);

  // fire the submit call once a rerender to keep the parent updated
  useEffect(() => submit(inputVal), [inputVal]);

  return <input type="text" onBlur={(e) => setInputVal(e.target.value)} />;
};

export default Callback;

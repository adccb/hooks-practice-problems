import React, { useState, useRef } from "react";

// you ever had to make a button flash manually?
// let's let the user pick a button by clicking, then
// make it green and give the parent component's
// onChange a pointer to the html element tht got clicked.
const Ref = ({ onChange }) => {
  const left = useRef(null);
  const right = useRef(null);
  const [active, setActive] = useState(left.current);

  // clear the colors
  document
    .querySelectorAll("button")
    .forEach((el) => (el.style["background-color"] = ""));

  // apply the new active color
  active.style["background-color"] = "green";

  const update = (val) => () => {
    setActive(val);
    onChange(val);
  };

  return (
    <>
      <button
        ref={left}
        name="left"
        type="button"
        onClick={update(left.current)}
      >
        click me
      </button>

      <button
        ref={right}
        name="right"
        type="button"
        onClick={update(right.current)}
      >
        don't click me
      </button>
    </>
  );
};

export default Ref;

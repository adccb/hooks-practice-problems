import React, { useState, useRef } from "react";

// you ever had to make a button flash manually?
// let's let the user pick a button by clicking, then
// make it green and give the parent component's
// onChange a pointer to the html element tht got clicked.
const Ref = ({ onChange }) => {
  const [active, setActive] = useState(null);

  // if you haven't worked with raw html elements before,
  // here's a snippet you might make use of here. replace
  // the HTMLElement with, y'know, an actual html element
  //
  // HTMLElement.style["background-color"] = "green";
  //
  // and, to clear all the colors:
  // document.querySelectorAll('button')
  //   .forEach(el => el.style['background-color'] = '')

  return (
    <>
      <button name="left" type="button">
        click me
      </button>

      <button name="right" type="button">
        don't click me
      </button>
    </>
  );
};

export default Ref;

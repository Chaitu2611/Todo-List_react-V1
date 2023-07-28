import React, { useState } from "react";

function Todoitems(props) {
  const [isdone, setisdone] = useState(false);

  function handleclick() {
    setisdone((prevval) => !prevval);
  }

  return (
    <div onClick={handleclick}>
      <li
        style={{
          textDecoration: isdone ? "line-through" : "none",
          cursor: "pointer",
          wordWrap: "break-word",
          wordBreak: "break-all"
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default Todoitems;

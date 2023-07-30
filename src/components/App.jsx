import React, { useState } from "react";
import Todoitems from "./TodoItem";

function App() {
  const [itemName, setitemName] = useState("");
  const [items, setitems] = useState([]);

  function handle(event) {
    const name = event.target.value;
    setitemName(name);
  }

  function handleclick() {
    if (itemName === "" || !itemName.replace(/\s/g, "").length) {   
        setitems((previtems) => [...previtems]);    //to check if input is empty
        setitemName("");                            //or contains only spaces
        return;
    }
    setitems((previtems) => [...previtems, itemName]);
    setitemName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handle} value={itemName} type="text" required />
        <button onClick={handleclick} style={{ cursor: "pointer" }}>
          <span>Add</span>
        </button>
      </div>
      {items.map((item, index) => (
        <Todoitems key={index} text={item} />
      ))}
    </div>
  );
}

export default App;

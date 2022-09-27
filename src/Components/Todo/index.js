import { useState } from "react";
import "../../App.css";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);
  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div className="todo">
      <label>
        <h1>To-Do</h1>
        <br />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>
      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;

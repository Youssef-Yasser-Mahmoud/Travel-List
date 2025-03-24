import { useState } from "react";
import "../App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(itemObj) {
    setItems((items) => [...items, itemObj]);
  }

  function handleDeleteItems(filterdId) {
    setItems((items) => items.filter((item) => item.id !== filterdId));
  }

  function handleToggleItems(toggledId) {
    setItems((items) =>
      items.map((item) =>
        item.id === toggledId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    let confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems(() => []);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

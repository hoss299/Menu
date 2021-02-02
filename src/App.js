import React, { useState } from "react";
import "./App.css";
import Menu from "./item";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  // this is the idea of this app ----------------------------------------
  const showItems = (category) => {
    if (category == "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  //--------------------------------------------------------------------------

  return (
    <section className="menu-section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btns">
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => showItems(category)}>
              {category}
            </button>
          );
        })}
      </div>

      <Menu menu={menu} />
    </section>
  );
}

export default App;

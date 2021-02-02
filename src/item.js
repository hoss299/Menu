import React from "react";
// import "./images";

function Menu({ menu }) {
  return (
    <div className="menu-grid">
      {menu.map((item) => {
        return (
          <article key={item.id} className="menu-item">
            <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
            <div className="text">
              <header>
                <h4>{item.title}</h4>
                <h4>${item.price}</h4>
              </header>
              <p className="desc">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;

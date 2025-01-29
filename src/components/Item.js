import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  function addToCart(){
    setCart(cart => !cart)
  }

  const cartText = cart ? "Remove From Cart" : "Add to Cart"

  const liClassName = cart ? "in-cart" : ""

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}className="add">{cartText}</button>
    </li>
  );
}

export default Item;

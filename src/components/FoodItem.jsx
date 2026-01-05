import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./FoodItem.css";

function FoodItem({ name, price, restaurant }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      id: `${restaurant}-${name}`, // stable id
      name,
      price,
      quantity,
      restaurant,
    });
  };

  return (
    <div className="food-card">
      <div className="food-info">
        <h4 className="food-name">{name}</h4>
        <p className="food-price">₹{price}</p>
      </div>

      <div className="quantity-controls">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button className="add-cart-btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;

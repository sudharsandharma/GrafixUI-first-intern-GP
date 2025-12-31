import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./FoodItem.css";

function FoodItem({ item }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
    });
  };

  return (
    <div className="food-card">

      {/* BADGES */}
      <div className="badge-row">
        {item.rating >= 4.5 && <span className="badge top">⭐ Top Rated</span>}
        {item.deliveryTime <= 20 && <span className="badge fast">⚡ Fast</span>}
      </div>

      <h3 className="food-name">{item.name}</h3>
      <p className="food-price">₹{item.price}</p>

      {/* STAR UI */}
      <div className="stars">
        {[1,2,3,4,5].map(star => (
          <span
            key={star}
            className={star <= Math.round(item.rating) ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
        <small>({item.rating})</small>
      </div>

      <p className="time">⏱ {item.deliveryTime} mins</p>

      {item.offer && <span className="offer">{item.offer}</span>}

      {/* QUANTITY */}
      <div className="qty-controls">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button className="add-btn" onClick={handleAdd}>
        Add to Cart
      </button>

    </div>
  );
}

export default FoodItem;



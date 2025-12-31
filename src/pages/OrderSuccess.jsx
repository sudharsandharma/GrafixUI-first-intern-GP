import { useState, useEffect } from "react";
import RatingPopup from "../components/RatingPopup";

const OrderSuccess = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [foodRating, setFoodRating] = useState(null);
  const [deliveryRating, setDeliveryRating] = useState(null);

  useEffect(() => {
    const savedFood = localStorage.getItem("foodRating");
    const savedDelivery = localStorage.getItem("deliveryRating");

    if (savedFood && savedDelivery) {
      setFoodRating(savedFood);
      setDeliveryRating(savedDelivery);
    } else {
      setShowPopup(true);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Order Placed Successfully</h2>
      <p>Your food is on the way 🍔</p>

      {}
      {foodRating && deliveryRating && (
        <div style={{ marginTop: "15px" }}>
          <p>⭐ Food Rating: {foodRating}</p>
          <p>🚴 Delivery Rating: {deliveryRating}</p>
        </div>
      )}

      {}
      {showPopup && (
        <RatingPopup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default OrderSuccess;

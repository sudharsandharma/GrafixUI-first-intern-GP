import { useState ,useEffect} from "react";
import "./RatingPopup.css";

const RatingPopup = ({ onClose }) => {
  const [foodRating, setFoodRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);

   useEffect(() => {
    const savedFood = localStorage.getItem("foodRating");
    const savedDelivery = localStorage.getItem("deliveryRating");

    if (savedFood) setFoodRating(Number(savedFood));
    if (savedDelivery) setDeliveryRating(Number(savedDelivery));
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("foodRating", foodRating);
    localStorage.setItem("deliveryRating", deliveryRating);

    alert("Thanks for your rating ❤️");
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <h2>Rate Your Order</h2>

        <div className="rating-block">
          <h4>Food Rating</h4>
          {[1,2,3,4,5].map(star => (
            <span
              key={star}
              className={star <= foodRating ? "star filled" : "star"}
              onClick={() => setFoodRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="rating-block">
          <h4>Delivery Rating</h4>
          {[1,2,3,4,5].map(star => (
            <span
              key={star}
              className={star <= deliveryRating ? "star filled" : "star"}
              onClick={() => setDeliveryRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        <button className="close-btn" onClick={onClose}>
          Skip
        </button>

      </div>
    </div>
  );
};

export default RatingPopup;

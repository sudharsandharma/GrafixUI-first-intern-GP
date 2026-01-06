import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import FoodItem from "../components/FoodItem";
import { restaurants } from "../Data/restaurantsData";
import { SearchContext } from "../context/SearchContext";

function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants[id];
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (restaurant) {
      localStorage.setItem("currentRestaurant", restaurant.name);
    }
  }, [restaurant]);

  if (!restaurant) {
    return <p>No menu available</p>;
  }

  // 🔍 FILTER MENU BASED ON SEARCH
  const filteredMenu = restaurant.menu.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ❌ Hide restaurant if no matching dishes
  if (searchTerm && filteredMenu.length === 0) {
    return null;
  }

  return (
    <div className="menu-page">
      <h1 className="menu-title">{restaurant.name}</h1>

      <div className="menu-list">
        {filteredMenu.map((item, i) => (
          <FoodItem
            key={i}
            name={item.name}
            price={item.price}
            restaurant={restaurant.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurant;

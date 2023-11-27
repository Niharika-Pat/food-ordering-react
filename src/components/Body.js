import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restuarant) => (
          <RestaurantCard key={restuarant.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

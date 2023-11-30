import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [fullRestaurantList, setFullRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFullRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data?.cards[5]?.card?.card);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredSearchResults = fullRestaurantList.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setListOfRestaurants(filteredSearchResults);
              console.log(listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
          <RestaurantCard key={restuarant.info.id} resData={restuarant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

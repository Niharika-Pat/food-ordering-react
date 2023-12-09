import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const {
    itemCards,
  } = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (cd) =>
      cd.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("res info", resInfo);
  return (
    <div className="text-center">
      <h3 className="font-bold my-6 text-2xl">{name}</h3>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          category={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

// {
/* <h3>{name}</h3>
<h3>
  {cuisines.join(", ")} - {costForTwoMessage}
</h3>

{categories.map((category) => (
  <div>
    <h2> {category?.card?.card?.title}</h2>

    <ul>
      {category?.card?.card?.itemCards.map((itemCard) => (
        <li key={itemCard.card.info.id}>
          {itemCard.card.info.name} - Rs{" "}
          {itemCard.card.info.price / 100 ||
            itemCard.card.info.defaultPrice / 100}
        </li>
      ))}
    </ul>
  </div>
))} */
// }

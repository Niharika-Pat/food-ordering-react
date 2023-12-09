import { RES_CARD_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4  p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={RES_CARD_URL + resData.cloudinaryImageId}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// return Higher order component
export const promotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;

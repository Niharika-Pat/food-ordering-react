import { RES_CARD_URL, styleCard } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

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
    </div>
  );
};

export default RestaurantCard;

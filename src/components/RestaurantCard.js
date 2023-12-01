import { RES_CARD_URL, styleCard } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
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

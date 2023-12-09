import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const { title, itemCards } = category;
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        {showItems === true ? <span>⬇️</span> : <span>➡️</span>}
      </div>

      <div>{showItems && <ItemList itemCards={itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;

/*{" "}
      {itemCards.map((itemCard) => {
        <ItemList itemCard={itemCard} />;
      })}{" "}
      */

import SingleRestaurant from "../SingleRestaurant/SingleRestaurant";

const RestaurantsList = ({ restaurants }) => {
  if (!Array.isArray(restaurants)) {
    console.error("restaurants is not an array:", restaurants);
    return null;
  }

  return (
    <section className="">
      {restaurants.map((restaurant) => {
        return <SingleRestaurant restaurant={restaurant} />;
      })}
    </section>
  );
};
export default RestaurantsList;

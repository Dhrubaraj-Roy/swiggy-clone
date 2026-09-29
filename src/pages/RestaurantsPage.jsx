import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRestaurant } from "../store/restaurantSlice";
import { PROXY_SERVER_URL, SWIGGY_RESTAURANTS_API } from "../services/swiggyApi";
import RestaurantCardLive from "../components/restaurant/RestaurantCardLive";
import RestaurantListShimmer from "../components/shimmers/RestaurantListShimmer";

export default function RestaurantsPage() {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurant.restaurants);

    useEffect(() => {
        if (restaurants.length === 0) {
            async function fetchRestaurants() {
                try {
                    const response = await fetch(PROXY_SERVER_URL + SWIGGY_RESTAURANTS_API);
                    const data = await response.json();
                    const list = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                    dispatch(addRestaurant(list));
                } catch (error) {
                    console.error("Failed to fetch restaurants:", error);
                }
            }
            fetchRestaurants();
        }
    }, [restaurants.length, dispatch]);

    if (restaurants.length === 0) {
        return <RestaurantListShimmer />;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Restaurants with online food delivery in Delhi
            </h1>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {restaurants.map((res) => (
                    <RestaurantCardLive key={res?.info?.id} res={res} />
                ))}
            </div>
        </div>
    );
}

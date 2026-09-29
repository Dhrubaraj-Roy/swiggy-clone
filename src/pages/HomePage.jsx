import HomeHeader from "../components/home/HomeHeader";
import FoodOptions from "../components/home/FoodOptions";
import GroceryOptions from "../components/home/GroceryOptions";
import RestaurantOptions from "../components/home/RestaurantOptions";

export default function HomePage() {
    return (
        <div>
            <HomeHeader />
            <FoodOptions />
            <GroceryOptions />
            <RestaurantOptions />
        </div>
    );
}

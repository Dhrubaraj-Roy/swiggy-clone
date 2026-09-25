import FoodOptions from "./FoodOptions"
import Header from "./Header"
import GroceryOptions from "./GroceryOptions"
import RestaurantOptions from "./RestaurantOptions"

export default function Home(){
    return(
        <>
         <Header></Header>
         <FoodOptions></FoodOptions>
         <GroceryOptions></GroceryOptions>
         <RestaurantOptions/>
        </>
    )
}
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantReducer from "./restaurantSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer,
    },
});

export default store;

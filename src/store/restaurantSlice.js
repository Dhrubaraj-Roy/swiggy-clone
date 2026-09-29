import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurants: [],
        menus:{},
    },
    reducers: {
        addRestaurant: (state, action) => {
            state.restaurants = action.payload || [];
        },
        addRestaurantMenu:(state, action) => {
            const {id, data} = action.payload;
            state.menus[id] = data;
        },
    },
});

export const { addRestaurant, addRestaurantMenu } = restaurantSlice.actions;
export default restaurantSlice.reducer;

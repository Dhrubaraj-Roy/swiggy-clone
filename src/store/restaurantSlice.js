import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurants: [],
    },
    reducers: {
        addRestaurant: (state, action) => {
            state.restaurants = action.payload || [];
        },
    },
});

export const { addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;

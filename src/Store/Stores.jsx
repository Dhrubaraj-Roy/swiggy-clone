import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CardSlicer";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
    }
})

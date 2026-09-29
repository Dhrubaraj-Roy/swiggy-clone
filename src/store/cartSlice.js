import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0,
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 });
            state.count++;
        },
        IncrementItems: (state, action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            if (element) {
                element.quantity += 1;
                state.count++;
            }
        },
        DecrementItems: (state, action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            if (element) {
                if (element.quantity > 1) {
                    element.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
                state.count--;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
});

export const { addItems, IncrementItems, DecrementItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

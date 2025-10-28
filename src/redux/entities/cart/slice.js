import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    selectors: {
        selectAmountById: (state, id) => state[id]
    },
    reducers: {
        addDishToCart: (state, {payload}) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeDishFromCart: (state, {payload}) => {
            const amount = (state[payload] || 0) - 1;
            if (amount <= 0) delete state[payload];
            else state[payload] = amount;
        }
    }
});

const selectCartSlice = state => state[cartSlice.name];
export const selectCartItemsIds = createSelector([selectCartSlice], cartState => Object.keys(cartState));

export const { selectAmountById } = cartSlice.selectors;
export const { addDishToCart, removeDishFromCart } = cartSlice.actions;
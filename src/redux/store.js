import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/slice";
import { apiSlice } from "./services/api.js";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddlewars) => getDefaultMiddlewars().concat(apiSlice.middleware)
});
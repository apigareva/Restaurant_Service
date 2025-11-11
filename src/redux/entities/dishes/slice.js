import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDish } from "./getDish";

const entitiyAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entitiyAdapter.getInitialState(), 
    extraReducers: builder => 
        builder
            .addCase(getDishes.fulfilled, (state, {payload}) => {
                entitiyAdapter.setAll(state, payload);
            })
            .addCase(getDish.fulfilled, (state, {payload}) => {
                entitiyAdapter.setOne(state, payload);
            })
});

const selectDishesSlice = state => state.dishes;
export const {selectById: selectDishById, selectIds: selectDisheIds} = entitiyAdapter.getSelectors(selectDishesSlice);
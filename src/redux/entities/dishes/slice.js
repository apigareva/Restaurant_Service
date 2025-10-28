import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from '../../../constants/normalized-data';

const initialState = {
    ids: normalizedDishes.map(dish => dish.id),
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {})
};

export const dishesSlice = createSlice({
    name: "dishes",
    initialState, 
    selectors: {
        selectDisheIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id]
    }
});

export const { selectDisheIds, selectDishById } = dishesSlice.selectors;
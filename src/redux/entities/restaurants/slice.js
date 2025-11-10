import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { getRestaurant } from "./getRestaurant";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectMenuById: (restaurantsState, id) => {
            const restaurant = restaurantsState.entities[id];
            const {menu} = restaurant || [];
            return menu;
            
        },
        selectReviewsById: (restaurantsState, id) => {
            const restaurant = restaurantsState.entities[id];
            const {reviews} = restaurant || [];
            return reviews;
        }
    },
    extraReducers: (builder) => 
        builder
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {
                entityAdapter.setAll(state, payload);
                state.requestStatus = 'fulfilled';
            })
            .addCase(getRestaurant.fulfilled, (state, {payload}) => {
                entityAdapter.setOne(state, payload);
            })
});

const selectRestaurantsSlice = state => state.restaurants;
export const {selectById: selectRestaurantById, selectIds: selectRestaurantsIds, selectTotal: selectTotalRestaurants} = 
    entityAdapter.getSelectors(selectRestaurantsSlice);
export const { selectMenuById, selectReviewsById } = restaurantsSlice.selectors;
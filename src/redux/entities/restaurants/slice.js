import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from '../../../constants/normalized-data';

const initialState = {
    ids: normalizedRestaurants.map(restaurant => restaurant.id),
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
    }, {})
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantsIds: restaurantsState => restaurantsState.ids,
        selectRestaurantById: (restaurantsState, id) => restaurantsState.entities[id]
    }
});

export const { selectRestaurantsIds, selectRestaurantById } = restaurantsSlice.selectors;
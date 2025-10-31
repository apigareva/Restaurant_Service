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
        selectRestaurantById: (restaurantsState, id) => restaurantsState.entities[id],
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
    }
});

export const { selectRestaurantsIds, selectRestaurantById, selectMenuById, selectReviewsById } = restaurantsSlice.selectors;
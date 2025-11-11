import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
    'restaurants/getRestaurant',
    async (restaurantId, {rejectWithValue, dispatch, getState}) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
        const result = await response.json();
        if (!result) {
            return rejectWithValue(`restaurant by ${restaurantId} not found`);
        }
        return result;
    }
);
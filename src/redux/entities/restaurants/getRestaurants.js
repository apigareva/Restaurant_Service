import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectTotalRestaurants } from "./slice";

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async (_, { rejectWithValue }) => {
        const response = await fetch('http://localhost:3001/api/restaurants/');
        const result = await response.json();
        if (!result.length) {
            rejectWithValue('empty result');
            return;
        }
        return result;
    },
    {
        condition: (_, { getState }) => {
            return !selectTotalRestaurants(getState());
        },
    }
);
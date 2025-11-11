import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from '../../../constants/requestStatus';

export const requestSlice = createSlice({
    name: 'request',
    initialState: {},
    selectors: {
        selectStatusById: (state, id) => state[id] || REQUEST_STATUS.IDLE,

    },
    extraReducers: builder => 
        builder
            .addMatcher(
                ({type}) => type.endsWith('/pending'),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS.PENDING;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith('/rejected'),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS.REJECTED;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith('/fulfilled'),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS.FULFILLED;
                }
            )
});

export const { selectStatusById } = requestSlice.selectors;
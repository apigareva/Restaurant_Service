import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: "users",
    initialState: entityAdapter.getInitialState(),
    extraReducers: builder => 
        builder
            .addCase(getUsers.fulfilled, (state, {payload}) => {
                entityAdapter.setAll(state, payload);
            })
})

const selectUsersSlice = state => state.users;
export const {selectById: selectUserById, selectIds: selectUsersIds, selectTotal: selectTotalUsers} = 
    entityAdapter.getSelectors(selectUsersSlice);
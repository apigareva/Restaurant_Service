import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-data";

const initialState = {
    ids: normalizedUsers.map(user => user.id),
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {})
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    selectors: {
        selectUsersIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id]
    }
})

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
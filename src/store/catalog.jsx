import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: "catalog",
    initialState: [],
    reducers: {
        showItems : (state, action) =>{
            return action.payload;
        }
    }
});

export const catalogAction = catalogSlice.actions;
export default catalogSlice;
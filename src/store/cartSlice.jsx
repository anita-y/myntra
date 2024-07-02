import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem : (state, action) =>{
            console.log("add items to cart", action);
             state.push(action.payload)
        },
        deleteItem: (state, action) => {
            console.log("delete Items fromcart");
            return state.filter((itemId) => itemId !== action.payload)
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
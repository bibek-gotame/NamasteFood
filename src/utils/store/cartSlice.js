import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", //* key of following values  cart : cartReducer
  initialState: {
    // *initial value to be set
    items: [],
  },
  reducers: {
    //* collection of action : function
    //*   action ={
    //*    payload:'data' => sent by dispatch(additem('data'))
    //*         }
    addItem : (state, action) => {
      state.items.push(action.payload);
    },  // these are the reducer function

    // action : reducer function
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = []; // this assigns the items an empty array
      // state.items.length = 0; // this sets the lenthg of the items to 0
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

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
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log(current(state));
    }, // these are the reducer function

    // action : reducer function
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.info.id !== action.payload
      );
    },
    // RTK uses immer to update the org state
    // RTK tells either mutate the existing state or return new state
    clearCart: (state) => {
      // state is local variable by which immer update the initial state using this.BTS whole redcr fnc is excute by immer
      state.items = []; // this assigns the items an empty array
      // state.items.length = 0; // this sets the lenthg of the items to 0
      // return {items : []}// whatever we return will reflect on initial state
    },
  },
});
// state holds proxy object which is reference by initial state
//   initialState: {
//   items: []
// },
// return {items :[]} it update the initial state

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

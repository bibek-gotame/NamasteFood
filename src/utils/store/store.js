import {configureStore} from '@reduxjs/toolkit'
import cartReDucer from './cartSlice'
export const store = configureStore({
    reducer:{ // this is the store's reducers which is collection of small reducers
        cart: cartReDucer  // reducer of corresponding slice key:value name : reducer
    }
})
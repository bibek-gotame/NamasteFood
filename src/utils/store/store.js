import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
export const store = configureStore({
    reducer:{ // this store's reducers which is collection of small reducers
        cart: cartReducer  // reducer of correspoding slice
    }
})
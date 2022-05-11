import {configureStore} from "@reduxjs/toolkit";
import productsReducer from './formSlice'

export const store = configureStore({
    reducer: {
        products:productsReducer,
    }
})
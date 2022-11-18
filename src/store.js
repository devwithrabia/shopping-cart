import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartReducer from './redux/productSlice.js';

const store = configureStore({
    reducer:{
        ShoppingCart:ShoppingCartReducer,

    },
});
export default store;
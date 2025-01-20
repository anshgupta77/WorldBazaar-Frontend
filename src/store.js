import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        product: productReducer,
    },
});

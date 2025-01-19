import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import cartReducer from "./Slices/cartSlice";
export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    },
});

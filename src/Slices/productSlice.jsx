import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: []
    },
    reducers: {
        setProductItems: (state,action) =>{
            state.items = action.payload;
        }
    }
})

export const {setProductItems} = productSlice.actions;
export const selectAllProducts = (state) => state.product.items;
export default productSlice.reducer;
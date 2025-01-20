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

export default productSlice.reducer;
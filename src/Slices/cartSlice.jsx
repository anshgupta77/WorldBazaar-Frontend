import { createSlice } from "@reduxjs/toolkit";
import {productData} from "./../Components/Data/ProductData";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // items: productData.slice(0, 4).map(ele => ({ ...ele, quantity: 1, selected: true })),
        items: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const item = action.payload;
            state.items.push({ ...item, selected: true, quantity: 1 });
        },
        removeItem: (state, action) => {
            const id = action.payload;
            console.log(id);
            state.items = state.items.filter(ele => ele.id !== id);
            console.log(state.items);
        },
        changeQuantity: (state, action) => {
            const { id, increament } = action.payload;
            const item = state.items.find(ele => ele.id === id);
            if (item) {
                item.quantity += increament;
                if (item.quantity === 0) {
                    state.items = state.items.filter(ele => ele.id !== id);
                }
            }
        },
        toggleItem: (state, action) => {
            const id = action.payload;
            console.log(id);
            const item = state.items.find(ele => ele.id === id);
            if (item) {
                item.selected = !item.selected;
            }
            console.log(state.items)
        },
    }
});

export const { addItem, removeItem, toggleItem, changeQuantity, setCartItems } = cartSlice.actions;

export const totalPrice = (state) => state.cart.items.reduce((acc, element) =>{
    if(element.selected){
        return acc + 
        (+element.price) * element.quantity;
    }
    return acc;
}, 0);

export default cartSlice.reducer;
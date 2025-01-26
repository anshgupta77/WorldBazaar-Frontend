import { createSlice } from "@reduxjs/toolkit";
import {productData} from "./../Components/Data/ProductData";
import { selectAllProducts } from "./productSlice";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            console.log("At the cartSlice",action.payload);
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const product = action.payload;
            state.items.push({ ...product, selected: true, quantity: 1 });
            
        },
        removeItem: (state, action) => {
            const id = action.payload;
            console.log(id);
            state.items = state.items.filter(ele => ele.id !== id);
            console.log(state.items);
        },
        changeQuantity: (state, action) => {
            const { id, increment } = action.payload;
            console.log("At the changeQuantity",id, increment);
            const item = state.items.find(ele => ele.id === id);
            if (item) {
                item.quantity += increment;
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
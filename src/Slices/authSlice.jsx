import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser:{
            username: "Guest",
            email: "Sign in to access your saved items and faster checkout"
        },
    },
    reducers: {
        setCurrentUser: (state, action) =>{
            const { username, email} = action.payload;
            console.log("Setting user to: ", action.payload);
            state.currentUser = { username, email};
        },
        removeCurrentUser: (state) =>{
            state.currentUser = "";
            console.log("Removing user", state.currentUser);
        }
    }
})
export const { setCurrentUser, removeCurrentUser } = authSlice.actions; 

export default authSlice.reducer;
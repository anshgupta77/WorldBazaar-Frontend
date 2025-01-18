import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, action) =>{
            const user = action.payload.username;
            console.log("Setting user to: ", user);
            state.currentUser = user;
        },
        removeCurrentUser: (state) =>{
            state.currentUser = null;
            console.log("Removing user", state.currentUser);
        }
    }
})
export const { setCurrentUser, removeCurrentUser } = authSlice.actions; 

export default authSlice.reducer;
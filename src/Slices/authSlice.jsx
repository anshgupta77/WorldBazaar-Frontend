import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, action) =>{
            const { token, refresh_token,  email} = action.payload;
            console.log("Setting user to: ", email);
            state.currentUser = { token, refresh_token, email};
        },
        removeCurrentUser: (state) =>{
            state.currentUser = null;
            console.log("Removing user", state.currentUser);
        }
    }
})
export const { setCurrentUser, removeCurrentUser } = authSlice.actions; 

export default authSlice.reducer;
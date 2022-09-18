import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photoUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photoUrl = action.payload.photoUrl;
    },

    setSignOutState: (state) => {
        state.name = null;
        state.email = null;
        state.photoUrl = null;
    }
  },
});



export default userSlice.reducer;
export const userActions = userSlice.actions;
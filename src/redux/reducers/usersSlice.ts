import { createSlice } from "@reduxjs/toolkit";
import type { user } from "../../interface/Iuser";


const initialState: user = {
  data: undefined,
  isLoggedIn: false,
  role: undefined,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
      state.data = undefined;
      state.role = undefined;
    },
    logIn: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
      // state.role="caretaker"
      state.role = action.payload?.Role;
      // state.role = "BDOReviewer"
    },
  },
});

export const { logIn, logOut } = usersSlice.actions;

export default usersSlice.reducer;

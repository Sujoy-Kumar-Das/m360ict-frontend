import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  email: string;
};

type TAuthInitialState = {
  user: null | TUser;
};
const initialState: TAuthInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

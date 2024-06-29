import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TUserInfo = {
  email: string | null;
  name: string | null;
};

type TInitialState = {
  user: TUserInfo | null;
};

const initialState: TInitialState = {
  user: {
    email: "abc@gmail.com",
    name: "abc vai",
  },
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUserInfo }>) => {
      const { email, name } = action.payload.user;
      if (state.user) {
        state.user.email = email;
        state.user.name = name;
      }
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

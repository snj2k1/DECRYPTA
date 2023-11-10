import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Auth } from "../../utils/local-storage";

type InitialState = {
  authorize: boolean;
  user: string;
};

const user = Auth.getAuth();

const initialState: InitialState = {
  authorize: user ? true : false,
  user: user ?? "",
};

export const authSlice = createSlice({
  name: "@@authSlice",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.authorize = true;
      state.user = action.payload;
    },
    logOut: state => {
      state.authorize = false;
      state.user = "";
    },
  },
});

export const selectAuthInfo = (state: RootState): InitialState => state.auth;
export const selectAuthStatus = (state: RootState): boolean =>
  state.auth.authorize;
export const selectAuthUser = (state: RootState): string => state.auth.user;

export const authReducer = authSlice.reducer;

export const { logIn, logOut } = authSlice.actions;

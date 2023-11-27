import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Auth, User } from "../../utils/user-data-handler";
import { CryptoFavoritesTypes } from "../../types/crypto-types";

interface IFavoritesObject {
  [key: string]: CryptoFavoritesTypes;
}

type InitialState = {
  authorize: boolean;
  user: string;
  favorite: IFavoritesObject;
};

const user = Auth.getAuth();
const favorite = User.getFavorite();

const initialState: InitialState = {
  authorize: user ? true : false,
  user: user ?? "",
  favorite: favorite ?? {},
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
      state.favorite = {};
    },
    toggleFavorite: (state, action: PayloadAction<CryptoFavoritesTypes>) => {
      if (state.favorite[action.payload.id]) {
        delete state.favorite[action.payload.id];
      } else {
        state.favorite[action.payload.id] = action.payload;
      }
    },
    setFavorite: (state, action: PayloadAction<IFavoritesObject>) => {
      state.favorite = action.payload;
    },
  },
});

export const selectAuthInfo = (state: RootState): InitialState => state.auth;
export const selectAuthStatus = (state: RootState): boolean =>
  state.auth.authorize;
export const selectAuthUser = (state: RootState): string => state.auth.user;
export const selectAuthFavorites = (state: RootState): IFavoritesObject =>
  state.auth.favorite;

export const authReducer = authSlice.reducer;

export const { logIn, logOut, toggleFavorite, setFavorite } = authSlice.actions;

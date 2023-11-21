import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Auth, User } from "../../utils/local-storage";
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
  favorite: favorite,
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
    toggleFavorite: (state, action: PayloadAction<CryptoFavoritesTypes>) => {
      if (state.favorite[action.payload.id]) {
        delete state.favorite[action.payload.id];
      } else {
        state.favorite[action.payload.id] = action.payload;
      }
    },
  },
});

export const selectAuthInfo = (state: RootState): InitialState => state.auth;
export const selectAuthStatus = (state: RootState): boolean =>
  state.auth.authorize;
export const selectAuthUser = (state: RootState): string => state.auth.user;
export const selectAuthFavorites = (state: RootState): IFavoritesObject =>
  state.auth.favorite;
export const selectAuthFavoritesArray = (
  state: RootState,
): CryptoFavoritesTypes[] => Object.values(state.auth.favorite);

export const authReducer = authSlice.reducer;

export const { logIn, logOut, toggleFavorite } = authSlice.actions;

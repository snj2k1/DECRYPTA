import { CryptoFavoritesTypes, CryptoHistoryTypes } from "./crypto-types";

export type FavoritesTypes = {
  [key: string]: CryptoFavoritesTypes;
};

export type UserTypes = {
  email: string;
  password: string;
  favorite: FavoritesTypes | {};
  history: Array<CryptoHistoryTypes> | [];
};

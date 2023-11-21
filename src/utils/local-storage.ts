import {
  CryptoFavoritesTypes,
  CryptoHistoryTypes,
} from "../types/crypto-types";
import { UserTypes } from "../types/user-types";

interface IFavoritesObject {
  [key: string]: CryptoFavoritesTypes;
}

export const Auth = {
  getUser: (key: string): UserTypes | null => {
    const user = localStorage.getItem(key);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  addUser: (key: string, value: { email: string; password: string }): void => {
    const item = JSON.stringify({ ...value, favorite: {}, history: [] });
    localStorage.setItem(key, item);
  },
  setAuth: (name: string): void => localStorage.setItem("auth", name),
  getAuth: (): string | null => localStorage.getItem("auth"),
  removeAuth: (): void => localStorage.removeItem("auth"),
};

export const User = {
  setHistory: (key: string, data: [string, CryptoHistoryTypes]): void => {
    const user = Auth.getUser(key);
    if (user) {
      const historyArray: Array<[string, CryptoHistoryTypes]> = [
        ...user.history,
      ];
      historyArray.unshift(data);
      const item = JSON.stringify({ ...user, history: [...historyArray] });
      localStorage.setItem(key, item);
    }
  },
  getHistory: (): Array<[string, CryptoHistoryTypes]> | [] => {
    const authKey = Auth.getAuth();
    if (authKey) {
      const user = Auth.getUser(authKey);
      if (user) {
        return [...user.history];
      }
    }
    return [];
  },
  getFavorite: (): IFavoritesObject => {
    const authKey = Auth.getAuth();
    if (authKey) {
      const user = Auth.getUser(authKey);
      if (user) {
        return { ...user.favorite };
      }
    }
    return {};
  },
  toggleFavorite: (data: CryptoFavoritesTypes) => {
    const authKey = Auth.getAuth();
    if (authKey) {
      const user = Auth.getUser(authKey);
      if (user) {
        const favorite: IFavoritesObject = { ...user.favorite };
        if (favorite[data.id]) {
          delete favorite[data.id];
        } else {
          favorite[data.id] = data;
        }
        const updatedUser = { ...user, favorite };
        const item = JSON.stringify(updatedUser);
        localStorage.setItem(authKey, item);
      }
    }
  },
};

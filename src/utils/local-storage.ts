import { User } from "../types/user-types";

export const Auth = {
  getUser: (key: string): User | null => {
    const user = localStorage.getItem(key);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  addUser: (key: string, value: { email: string; password: string }): void => {
    const item = JSON.stringify({ ...value, favorite: [], history: [] });
    localStorage.setItem(key, item);
  },
  setAuth: (name: string): void => localStorage.setItem("auth", name),
  getAuth: (): string | null => localStorage.getItem("auth"),
  removeAuth: (): void => localStorage.removeItem("auth"),
};

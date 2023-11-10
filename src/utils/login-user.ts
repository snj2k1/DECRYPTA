import { Auth } from "./local-storage";

export const LoginUser = (email: string, password: string): string | null => {
  const user = Auth.getUser(email);
  if (user && user.password === password) {
    Auth.setAuth(email);
    return null;
  } else {
    return "E-Mail or Password entered incorrectly";
  }
};

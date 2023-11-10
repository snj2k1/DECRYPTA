import { CheckEmail } from "../services/check-email";
import { Auth } from "./local-storage";

export const RegisterUser = (
  email: string,
  password: string,
): string | null => {
  if (!CheckEmail(email)) {
    return "Incorrect E-Mail was entered";
  }

  if (Auth.getUser(email) === null) {
    Auth.addUser(email, {
      email,
      password,
    });
    Auth.setAuth(email);
    return null;
  } else {
    return "This E-Mail has already been registered";
  }
};

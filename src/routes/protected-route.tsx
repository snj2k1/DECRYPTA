import { Navigate, useLocation } from "react-router";

import { ROUTES } from "./constants";
import { Auth } from "../utils/local-storage";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const isAuth = Auth.getAuth();
  const { pathname } = useLocation();

  if (!isAuth) {
    if (pathname === ROUTES.FAVORITES || pathname === ROUTES.HISTORY) {
      return <Navigate to={ROUTES.HOME} replace />;
    }
  }

  return children;
};

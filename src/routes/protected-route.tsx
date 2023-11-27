import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

import { ROUTES } from "./constants";
import { selectAuthStatus } from "../store/slices/auth-slice";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const isAuth = useSelector(selectAuthStatus);
  const { pathname } = useLocation();

  if (!isAuth) {
    if (pathname === ROUTES.FAVORITES || pathname === ROUTES.HISTORY) {
      return <Navigate to={ROUTES.HOME} replace />;
    }
  }

  return children;
};

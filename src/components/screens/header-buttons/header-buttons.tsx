import { useSelector } from "react-redux";

import { LoginButton } from "../../ui/login-button/login-button";
import { SearchButton } from "../../ui/search-button/search-button";
import styles from "./header-buttons.module.scss";
import { selectAuthStatus } from "../../../store/slices/auth-slice";
import { LogoutButton } from "../../ui/logout-button/logout-button";
import { SelectCurrency } from "../../ui/select-currency/select-currency";
import { FavoritesButton } from "../../ui/favorites-button/favorites-button";
import { HistoryButton } from "../../ui/history-button/history-button";

const HeaderButtons = () => {
  const isAuth = useSelector(selectAuthStatus);

  return (
    <div className={styles.buttons}>
      <SearchButton />
      {isAuth && <FavoritesButton />}
      {isAuth && <HistoryButton />}
      <SelectCurrency />
      {!isAuth ? <LoginButton /> : <LogoutButton />}
    </div>
  );
};

export { HeaderButtons };

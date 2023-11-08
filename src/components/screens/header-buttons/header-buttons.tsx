import { useSelector } from "react-redux";
import { LoginButton } from "../../ui/login-button/login-button";
import { SearchButton } from "../../ui/search-button/search-button";
import styles from "./header-buttons.module.scss";
import { selectAuthStatus } from "../../../store/slices/auth-slice";
import { LogoutButton } from "../../ui/logout-button/logout-button";

const HeaderButtons = () => {
  const isAuth = useSelector(selectAuthStatus);

  return (
    <div className={styles.buttons}>
      <SearchButton />
      {!isAuth ? <LoginButton /> : <LogoutButton />}
    </div>
  );
};

export { HeaderButtons };

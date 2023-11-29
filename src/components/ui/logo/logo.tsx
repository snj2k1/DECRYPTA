import { Link } from "react-router-dom";

import styles from "./logo.module.scss";
import { ROUTES } from "../../../routes/constants";

const Logo = () => {
  return (
    <Link to={ROUTES.HOME}>
      <span className={styles.logo}>
        <span>DE</span>CRYPTA
      </span>
    </Link>
  );
};

export { Logo };

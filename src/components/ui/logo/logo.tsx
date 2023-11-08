import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link to="/">
      <span className={styles.logo}>
        <span>DE</span>CRYPTA
      </span>
    </Link>
  );
};

export { Logo };

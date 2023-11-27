import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./search-item.module.scss";
import { AddFavoriteBtn } from "../../shared/add-favorite-btn/add-favorite-btn";
import { selectAuthStatus } from "../../../store/slices/auth-slice";
import { LockedFavoriteBtn } from "../../shared/locked-favorite-btn/locked-favorite-btn";

type SearchItemProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
};

const SearchItem = ({ id, name, image, symbol }: SearchItemProps) => {
  const isAuth = useSelector(selectAuthStatus);

  return (
    <Link to={`/${id}`} className={s.item}>
      {isAuth ? (
        <AddFavoriteBtn coin={{ id, name, image, symbol }} />
      ) : (
        <LockedFavoriteBtn />
      )}
      <div className={s.info}>
        <img src={image} alt={symbol} className={s.img} />
        <div className={s.names}>
          <span>{name}</span>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
};

export { SearchItem };

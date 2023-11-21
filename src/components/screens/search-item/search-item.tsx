import { Link } from "react-router-dom";

import s from "./search-item.module.scss";

type SearchItemProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
};

const SearchItem = ({ id, name, image, symbol }: SearchItemProps) => {
  return (
    <Link to={`/${id}`} className={s.item}>
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

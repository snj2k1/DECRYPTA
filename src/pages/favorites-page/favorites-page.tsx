import { useSelector } from "react-redux";
import { useMemo } from "react";

import { selectAuthFavorites } from "../../store/slices/auth-slice";
import { SearchItem } from "../../components/screens/search-item/search-item";
import s from "./favorites-page.module.scss";

const FavoritesPage = () => {
  const favorites = useSelector(selectAuthFavorites);

  const data = useMemo(() => Object.values(favorites), [favorites]);

  return data.length ? (
    <ul className={s.list}>
      {data.map(coin => (
        <SearchItem
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
        />
      ))}
    </ul>
  ) : (
    <span>No data available</span>
  );
};

export { FavoritesPage };

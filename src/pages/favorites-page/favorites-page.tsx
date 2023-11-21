import { useSelector } from "react-redux";

import { selectAuthFavoritesArray } from "../../store/slices/auth-slice";
import { SearchItem } from "../../components/screens/search-item/search-item";
import s from "./favorites-page.module.scss";

const FavoritesPage = () => {
  const favorites = useSelector(selectAuthFavoritesArray);

  return (
    <ul className={s.list}>
      {favorites.map(coin => (
        <SearchItem
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
        />
      ))}
    </ul>
  );
};

export { FavoritesPage };

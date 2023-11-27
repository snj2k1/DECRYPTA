import { useDispatch } from "react-redux";

import { toggleFavorite } from "../store/slices/auth-slice";
import { User } from "../utils/user-data-handler";

type FavoriteCoinProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
};

export const useFavorites = () => {
  const dispatch = useDispatch();

  return function (coin: FavoriteCoinProps) {
    if (coin) {
      const data = {
        id: coin.id,
        name: coin.name,
        image: coin.image,
        symbol: coin.symbol,
      };
      dispatch(toggleFavorite(data));
      User.toggleFavorite(data);
    }
  };
};

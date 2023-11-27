import { HeartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import s from "./add-favorite-btn.module.scss";
import { selectAuthFavorites } from "../../../store/slices/auth-slice";
import { useFavorites } from "../../../hooks/use-favorites";

type FavoriteCoinProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
};

const AddFavoriteBtn = ({ coin }: { coin: FavoriteCoinProps }) => {
  const setFavorites = useFavorites();
  const favorites = useSelector(selectAuthFavorites);

  return (
    <HeartOutlined
      className={favorites[coin.id] ? s.heart_active : s.heart}
      style={{ maxWidth: "max-content" }}
      onClick={e => {
        e.preventDefault();
        setFavorites(coin);
      }}
    />
  );
};

export { AddFavoriteBtn };

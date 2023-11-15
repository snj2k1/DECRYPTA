import { Link } from "react-router-dom";

import s from "./crypto-item.module.scss";
import { formatMarketCaps } from "../../../utils/format-market-caps";

type CryptoItemProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  dayChange: number;
  marketCap: number;
  currencySymbol: string;
};

const CryptoItem = ({
  id,
  name,
  image,
  symbol,
  price,
  dayChange,
  marketCap,
  currencySymbol,
}: CryptoItemProps) => {
  const coinPrice = currencySymbol + price.toLocaleString("en-US");
  const coinDayChangePercent =
    (dayChange > 0 ? "+" : "") + dayChange.toFixed(2) + "%";
  const coinMarketCap = currencySymbol + formatMarketCaps(marketCap);
  const percentColor = dayChange < 0 ? "red" : "rgb(14, 203, 129)";

  return (
    <Link to={`/${id}`} className={s.item}>
      <div className={s.info}>
        <img src={image} alt={symbol} className={s.img} />
        <div className={s.names}>
          <span>{name}</span>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </div>
      <span>{coinPrice}</span>
      <span style={{ color: percentColor }}>{coinDayChangePercent}</span>
      <span>{coinMarketCap}</span>
    </Link>
  );
};

export { CryptoItem };

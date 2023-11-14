import { Link } from "react-router-dom";

import { CryptoItemProps } from "../../../types/crypto-types";
import s from "./crypto-item.module.scss";
import { formatMarketCaps } from "../../../utils/format-market-caps";

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
  return (
    <Link to={`/${id}`} className={s.item}>
      <div className={s.info}>
        <img src={image} alt={symbol} className={s.img} />
        <div className={s.names}>
          <span>{name}</span>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </div>
      <span>{currencySymbol + price.toLocaleString("en-US")}</span>
      <span style={{ color: dayChange < 0 ? "red" : "rgb(14, 203, 129)" }}>
        {(dayChange > 0 ? "+" : "") + dayChange.toFixed(2) + "%"}
      </span>
      <span>{currencySymbol + formatMarketCaps(marketCap)}</span>
    </Link>
  );
};

export { CryptoItem };

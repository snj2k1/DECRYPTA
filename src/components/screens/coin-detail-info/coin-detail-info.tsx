import { formatMarketCaps } from "../../../utils/format-market-caps";

type CoinDetailInfoProps = {
  rank: number;
  price: number;
  market_cap: number;
  symbol: string;
};

const CoinDetailInfo = ({
  rank,
  price,
  market_cap,
  symbol,
}: CoinDetailInfoProps) => {
  const currentPrice = symbol + price.toLocaleString("en-US");
  const marketCap = symbol + formatMarketCaps(market_cap);

  return (
    <ul>
      <li>
        <span>Rank:</span>
        <span>{rank}</span>
      </li>
      <li>
        <span>Current Price:</span>
        <span>{currentPrice}</span>
      </li>
      <li>
        <span>Market Cap:</span>
        <span>{marketCap}</span>
      </li>
    </ul>
  );
};

export { CoinDetailInfo };

export type Crypto = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | object;
  last_updated: string;
};

export type CryptoHistoryTypes = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  image: {
    large: string;
    thumb: string;
    small: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
      rub: number;
    };
    market_cap: {
      usd: number;
      rub: number;
    };
  };
};

export type CryptoFavoritesTypes = {
  id: string;
  name: string;
  symbol: string;
  image: string;
};

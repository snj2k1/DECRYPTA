export const BASE_URL = "https://api.coingecko.com/api/v3/coins/";

export const coinListParams = {
  order: "market_cap_desc",
  sparkline: false,
};

export const COIN_DETAIL = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const COIN_CHART = (id: string, days: number = 365, currency: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const COIN_SEARCH = (name: string) =>
  `https://api.coingecko.com/api/v3/search?query=${name}`;

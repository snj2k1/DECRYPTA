import { User } from "../utils/local-storage";

type DataTypes = {
  id: string;
  name: string;
  market_cap_rank: number;
  symbol: string;
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

export const useHistory = () => {
  return function (data: DataTypes) {
    const result: [string, DataTypes] = [new Date().toLocaleString("ru"), data];
    User.setHistory(result);
  };
};

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";

interface CurrencyContextProps {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  symbol: string;
}

const Currency = createContext<CurrencyContextProps | undefined>(undefined);

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const CurrencyContext: FC<CurrencyContextProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "usd") {
      setSymbol("$");
    } else {
      setSymbol("₽");
    }
  }, [currency]);

  return (
    <Currency.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Currency.Provider>
  );
};

export default CurrencyContext;

export const useCurrency = (): CurrencyContextProps => {
  const context = useContext(Currency);
  if (!context) {
    throw new Error(
      "useCryptoState must be used within a CurrencyContextProvider",
    );
  }
  return context;
};

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";

type CurrencyType = "usd" | "rub";
type SymbolType = "$" | "₽";
interface CurrencyContextProps {
  currency: CurrencyType;
  setCurrency: React.Dispatch<React.SetStateAction<CurrencyType>>;
  symbol: SymbolType;
}

const Currency = createContext<CurrencyContextProps | undefined>(undefined);

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const CurrencyContext: FC<CurrencyContextProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyType>("usd");
  const [symbol, setSymbol] = useState<SymbolType>("$");

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

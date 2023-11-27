import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useMemo,
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
  const symbol: SymbolType = useMemo(
    () => (currency === "usd" ? "$" : "₽"),
    [currency],
  );

  const contextValue = useMemo(
    () => ({ currency, setCurrency, symbol }),
    [currency, setCurrency, symbol],
  );

  return <Currency.Provider value={contextValue}>{children}</Currency.Provider>;
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

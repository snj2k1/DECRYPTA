import { Select } from "antd";
import { useMemo } from "react";

import { useCurrency } from "../../../context/currency-context/currency-context";

const SelectCurrency = () => {
  const { currency, setCurrency } = useCurrency();

  const options = useMemo(
    () => [
      { value: "usd", label: "$ USD" },
      { value: "rub", label: "₽ RUB" },
    ],
    [],
  );

  return (
    <Select defaultValue={currency} onChange={setCurrency} options={options} />
  );
};

export { SelectCurrency };

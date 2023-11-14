import { Select } from "antd";

import { CurrencyState } from "../../../context/currency-context/currency-context";

const SelectCurrency = () => {
  const { currency, setCurrency } = CurrencyState();

  return (
    <Select
      defaultValue={currency}
      onChange={value => setCurrency(value)}
      options={[
        { value: "usd", label: "$ USD" },
        { value: "rub", label: "₽ RUB" },
      ]}
    />
  );
};

export { SelectCurrency };

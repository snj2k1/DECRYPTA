import { Select } from "antd";

import { useCurrency } from "../../../context/currency-context/currency-context";

const SelectCurrency = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select
      defaultValue={currency}
      onChange={setCurrency}
      options={[
        { value: "usd", label: "$ USD" },
        { value: "rub", label: "₽ RUB" },
      ]}
    />
  );
};

export { SelectCurrency };

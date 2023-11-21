import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useGetCoinListQuery } from "../../../store/rtk-query/coinlist-api";
import { Crypto } from "../../../types/crypto-types";
import { CryptoItem } from "../crypto-item/crypto-item";
import s from "./crypto-list.module.scss";
import { TableHeader } from "../../ui/table-header/table-header";
import { useCurrency } from "../../../context/currency-context/currency-context";

const CryptoList = () => {
  const { currency, symbol } = useCurrency();
  const { data, isLoading, error } = useGetCoinListQuery(currency);

  return error ? (
    <span>Something went wrong!</span>
  ) : (
    <ul className={s.list}>
      <TableHeader />
      {data &&
        data.map((el: Crypto) => (
          <CryptoItem
            key={el["id"]}
            id={el["id"]}
            name={el["name"]}
            image={el["image"]}
            symbol={el["symbol"]}
            price={el["current_price"]}
            dayChange={el["price_change_percentage_24h"]}
            marketCap={el["market_cap"]}
            currencySymbol={symbol}
          />
        ))}
      {isLoading && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 64,
                position: "static",
                margin: "30px 50%",
              }}
              spin
            />
          }
        />
      )}
    </ul>
  );
};

export { CryptoList };

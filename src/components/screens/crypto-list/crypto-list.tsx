import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

import {
  useGetCoinListRUBQuery,
  useGetCoinListUSDQuery,
} from "../../../store/rtk-query/coinlist-api";
import { Crypto } from "../../../types/crypto-types";
import { CryptoItem } from "../crypto-item/crypto-item";
import s from "./crypto-list.module.scss";
import { TableHeader } from "../../ui/table-header/table-header";
import { useCurrency } from "../../../context/currency-context/currency-context";

const CryptoList = () => {
  const [usdPage, setUsdPage] = useState<number>(1);
  const [rubPage, setRubPage] = useState<number>(1);
  const { currency, symbol } = useCurrency();
  const query =
    currency === "usd" ? useGetCoinListUSDQuery : useGetCoinListRUBQuery;

  const { data, isLoading, error } = query({
    page: currency === "usd" ? usdPage : rubPage,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isLoading) {
        currency === "usd" ? setUsdPage(usdPage + 1) : setRubPage(rubPage + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [currency, usdPage, rubPage, isLoading]);

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

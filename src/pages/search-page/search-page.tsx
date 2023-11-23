import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { COIN_SEARCH } from "../../config/api";
import { SearchItem } from "../../components/screens/search-item/search-item";
import s from "./search-page.module.scss";

type SearchItems = {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
};

const SearchPage = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<SearchItems>>([]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (query) {
      axios
        .get(COIN_SEARCH(query))
        .then(res => {
          setData(res.data.coins);
          setLoading(false);
        })
        .catch(e => {
          setError(e);
          setLoading(false);
        });
    } else {
      setError(true);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return loading ? (
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
  ) : (
    <div className={s.container}>
      {(error || !data.length) && <span>Coins not found...</span>}
      {data.length && (
        <ul className={s.list}>
          {data.map((coin: SearchItems) => (
            <SearchItem
              key={coin.id}
              id={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.large}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export { SearchPage };

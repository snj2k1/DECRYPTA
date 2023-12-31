import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { useCurrency } from "../../context/currency-context/currency-context";
import { COIN_DETAIL } from "../../config/api";
import s from "./coin-detail.module.scss";
import { CoinCharts } from "../../components/screens/coin-charts/coin-charts";
import { selectAuthUser } from "../../store/slices/auth-slice";
import { CoinDetailInfo } from "../../components/screens/coin-detail-info/coin-detail-info";
import { AddFavoriteBtn } from "../../components/shared/add-favorite-btn/add-favorite-btn";

interface ICoinDetail {
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
}

const CoinDetail = () => {
  const { id } = useParams();
  const { currency, symbol } = useCurrency();
  const [coin, setCoin] = useState<ICoinDetail | undefined>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthUser);

  useEffect(() => {
    setLoading(true);
    if (id) {
      axios
        .get(COIN_DETAIL(id))
        .then(res => {
          setCoin(res.data);
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
  }, [id]);

  return (
    <>
      <ArrowLeftOutlined
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={() => navigate(-1)}
      />
      {error ? (
        <span>Something went wrong...</span>
      ) : (
        <div className={s.container}>
          {coin && (
            <>
              <div className={s.info}>
                <img src={coin.image.large} alt={coin.name} />
                <h2>{coin.name}</h2>
                {isAuth && (
                  <div className={s.fav}>
                    <AddFavoriteBtn
                      coin={{
                        image: coin.image.large,
                        id: coin.id,
                        name: coin.name,
                        symbol: coin.symbol,
                      }}
                    />
                  </div>
                )}
                <p
                  dangerouslySetInnerHTML={{ __html: coin.description.en }}
                ></p>
                <CoinDetailInfo
                  rank={coin.market_cap_rank}
                  price={coin.market_data.current_price[currency]}
                  market_cap={coin.market_data.market_cap[currency]}
                  symbol={symbol}
                />
              </div>
              <CoinCharts id={coin.id} currency={currency} />
            </>
          )}
          {loading && (
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
        </div>
      )}
    </>
  );
};

export { CoinDetail };

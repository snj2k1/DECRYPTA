import { useEffect, useState } from "react";

import { User } from "../../utils/local-storage";
import { CryptoHistoryTypes } from "../../types/crypto-types";
import { HistoryItem } from "../../components/screens/history-item/history-item";
import s from "./history-page.module.scss";

const HistoryPage = () => {
  const [history, setHistory] = useState<[] | [string, CryptoHistoryTypes][]>(
    [],
  );

  useEffect(() => {
    setHistory(User.getHistory());
  }, []);

  return (
    <ul className={s.list}>
      {history.map(coin => (
        <HistoryItem
          key={coin[1].id}
          name={coin[1].name}
          image={coin[1].image.large}
          symbol={coin[1].symbol}
          date={coin[0]}
        />
      ))}
    </ul>
  );
};

export { HistoryPage };

import { useEffect, useState } from "react";

import { User } from "../../utils/user-data-handler";
import { CryptoHistoryTypes } from "../../types/crypto-types";
import { HistoryItem } from "../../components/screens/history-item/history-item";
import s from "./history-page.module.scss";

const HistoryPage = () => {
  const [history, setHistory] = useState<[] | CryptoHistoryTypes[]>([]);

  useEffect(() => {
    setHistory(User.getHistory());
  }, []);

  return history.length ? (
    <ul className={s.list}>
      {history.map(el => (
        <HistoryItem
          key={el.date + el.text}
          text={el.text}
          url={el.url}
          date={el.date}
        />
      ))}
    </ul>
  ) : (
    <span>No data available</span>
  );
};

export { HistoryPage };

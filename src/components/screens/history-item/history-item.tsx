import { Link } from "react-router-dom";

import s from "./history-item.module.scss";

type SearchItemProps = {
  date: string;
  url: string;
  text: string;
};

const HistoryItem = ({ date, url, text }: SearchItemProps) => {
  return (
    <div className={s.item}>
      <span className={s.date}>{date}</span>
      <Link to={url}>{text}</Link>
      <span className={s.url}>{url}</span>
    </div>
  );
};

export { HistoryItem };

import s from "./history-item.module.scss";

type SearchItemProps = {
  symbol: string;
  name: string;
  image: string;
  date: string;
};

const HistoryItem = ({ name, image, symbol, date }: SearchItemProps) => {
  return (
    <div className={s.item}>
      <span className={s.date}>{date}</span>
      <div className={s.info}>
        <img src={image} alt={symbol} className={s.img} />
        <div className={s.names}>
          <span>{name}</span>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export { HistoryItem };

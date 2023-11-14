import s from "./table-header.module.scss";

const TableHeader = () => {
  return (
    <div className={s.thead}>
      <span>Coin</span>
      <span>Price</span>
      <span>24h Change</span>
      <span>Market Cap</span>
    </div>
  );
};

export { TableHeader };

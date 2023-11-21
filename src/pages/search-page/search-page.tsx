import { Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "../../hooks/use-debounce";
import { COIN_SEARCH } from "../../config/api";
import { SearchItem } from "../../components/screens/search-item/search-item";
import s from "./search-page.module.scss";
import {
  selectSearchInfo,
  updateSearch,
} from "../../store/slices/search-slice";

const { Search } = Input;

interface ISearchItems {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}

const SearchPage = () => {
  const dispatch = useDispatch();
  const { text, data } = useSelector(selectSearchInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 2500);

  useEffect(() => {
    setError(false);
    if (searchTerm.trim()) {
      axios
        .get(COIN_SEARCH(searchTerm.trim()))
        .then(res =>
          dispatch(
            updateSearch({ text: searchTerm.trim(), data: res.data.coins }),
          ),
        )
        .catch(e => setError(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <div className={s.container}>
      <Search
        defaultValue={text}
        className={s.search}
        placeholder="Search your coin..."
        onChange={e => setSearchTerm(e.target.value)}
        enterButton
      />
      {error || !data.length ? (
        <span>Coins not found...</span>
      ) : (
        <ul className={s.list}>
          {data.map((coin: ISearchItems) => (
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

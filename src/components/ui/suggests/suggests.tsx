import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { COIN_SEARCH } from "../../../config/api";
import s from "./suggests.module.scss";
import { SuggestItem } from "./suggest-item";

type SearchItems = {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
};

type SuggestsItems = {
  id: string;
  name: string;
};

interface SuggestsProps {
  suggest: string;
}

const Suggests: React.FC<SuggestsProps> = React.memo(
  ({ suggest }): JSX.Element | null => {
    const [suggestsList, setSuggestsList] = useState<Array<SuggestsItems> | []>(
      [],
    );

    useEffect(() => {
      axios
        .get(COIN_SEARCH(suggest))
        .then(res => res.data.coins)
        .then(coins =>
          coins.slice(0, 5).map((coin: SearchItems) => {
            const { id, name } = coin;
            return { id, name };
          }),
        )
        .then(list => setSuggestsList(list));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suggest]);

    return suggestsList.length ? (
      <ul className={s.list}>
        {suggestsList.map(el => (
          <SuggestItem key={el.id} id={el.id} name={el.name} />
        ))}
      </ul>
    ) : null;
  },
);

Suggests.propTypes = {
  suggest: PropTypes.string.isRequired,
};

export { Suggests };

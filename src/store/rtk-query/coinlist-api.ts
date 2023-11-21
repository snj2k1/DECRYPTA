import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, coinListParams } from "../../config/api";

type CurrencyType = "usd" | "rub";

const constructParams = (currency: CurrencyType) => ({
  url: "markets",
  params: {
    vs_currency: currency,
    ...coinListParams,
  },
});

export const coinlistApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getCoinList: builder.query({
      query: (currency: CurrencyType) => constructParams(currency),
    }),
  }),
});

export const { useGetCoinListQuery } = coinlistApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, coinListParams } from "../../config/api";

const constructParams = (page: number, currency: "usd" | "rub") => ({
  url: "markets",
  params: {
    vs_currency: currency,
    ...coinListParams,
    page,
  },
});

/* eslint-disable */ // Внутри метода merge эти данные обозначены как any
const updateCache = (currentCache: any, newItems: any) => {
  const updatedResults = [
    ...(currentCache?.results || []),
    ...(newItems.results || newItems),
  ];

  return [...currentCache, ...updatedResults];
};

export const coinlistApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getCoinListUSD: builder.query({
      query: ({ page }: { page: number }) => constructParams(page, "usd"),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => updateCache(currentCache, newItems),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getCoinListRUB: builder.query({
      query: ({ page }: { page: number }) => constructParams(page, "rub"),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => updateCache(currentCache, newItems),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetCoinListUSDQuery, useGetCoinListRUBQuery } = coinlistApi;

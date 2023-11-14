import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, coinListParams } from "../../config/api";

export const coinlistApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getCoinListUSD: builder.query({
      query: ({ page }: { page: number }) => {
        return {
          url: "markets",
          params: {
            vs_currency: "usd",
            ...coinListParams,
            page,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const updatedResults = [
          ...(currentCache.results || []),
          ...(newItems.results || newItems),
        ];

        return [...currentCache, ...updatedResults];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getCoinListRUB: builder.query({
      query: ({ page }: { page: number }) => {
        return {
          url: "markets",
          params: {
            vs_currency: "rub",
            ...coinListParams,
            page,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const updatedResults = [
          ...(currentCache.results || []),
          ...(newItems.results || newItems),
        ];

        return [...currentCache, ...updatedResults];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetCoinListUSDQuery, useGetCoinListRUBQuery } = coinlistApi;

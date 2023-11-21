import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface ISearchItems {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
}

type InitialState = {
  text: string;
  data: Array<ISearchItems>;
};

const initialState: InitialState = {
  text: "",
  data: [],
};

export const searchSlice = createSlice({
  name: "@@searchSlice",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.text = action.payload.text;
      state.data = action.payload.data;
    },
  },
});

export const selectSearchInfo = (state: RootState): InitialState =>
  state.search;

export const searchReducer = searchSlice.reducer;

export const { updateSearch } = searchSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type InitialState = {
  open: boolean;
  type: "login" | "registration";
};

const initialState: InitialState = {
  open: false,
  type: "login",
};

export const modalSlice = createSlice({
  name: "@@modalSlice",
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<InitialState>) => {
      state.open = action.payload.open;
      state.type = action.payload.type;
    },
  },
});

export const selectModalInfo = (state: RootState): InitialState => state.modal;
export const selectModalOpen = (state: RootState): boolean => state.modal.open;
export const selectModalType = (state: RootState): "login" | "registration" =>
  state.modal.type;

export const modalReducer = modalSlice.reducer;

export const { toggleState } = modalSlice.actions;

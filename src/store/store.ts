import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./slices/modal-slice";
import { authReducer } from "./slices/auth-slice";
import { coinlistApi } from "./rtk-query/coinlist-api";

export const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  [coinlistApi.reducerPath]: coinlistApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coinlistApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

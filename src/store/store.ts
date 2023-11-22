import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./slices/modal-slice";
import { authReducer } from "./slices/auth-slice";
import { coinlistApi } from "./rtk-query/coinlist-api";
import { searchReducer } from "./slices/search-slice";
import { errorLoggerMiddleware } from "./middleware/logger";

export const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  search: searchReducer,
  [coinlistApi.reducerPath]: coinlistApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(coinlistApi.middleware)
      .concat(errorLoggerMiddleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

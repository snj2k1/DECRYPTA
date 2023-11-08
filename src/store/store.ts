import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modal-slice";
import { authReducer } from "./slices/auth-slice";

export const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

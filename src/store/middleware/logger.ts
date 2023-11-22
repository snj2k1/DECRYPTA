import { isRejectedWithValue, type Middleware } from "@reduxjs/toolkit";

export const errorLoggerMiddleware: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    const error =
      action.payload?.data?.errors?.toString() ||
      action.payload?.data ||
      action.payload?.code;
    // eslint-disable-next-line no-console
    console.info(`${action.type} is rejected with error: ${error}`);
  }

  return next(action);
};

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import App from "./components/app/app";
import { store } from "./store/store";
import "./assets/styles/global.css";
import CurrencyContext from "./context/currency-context/currency-context";

ReactDOM.render(
  <Provider store={store}>
    <CurrencyContext>
      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        <App />
      </ErrorBoundary>
    </CurrencyContext>
  </Provider>,
  document.getElementById("root"),
);

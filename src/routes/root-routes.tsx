import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { ROUTES } from "./constants";
import { ProtectedRoute } from "./protected-route";
import { Layout } from "../components/layout/layout";

const SearchPage = lazy(() => import("../pages/search-page"));
const MainPage = lazy(() => import("../pages/main-page"));
const HistoryPage = lazy(() => import("../pages/history-page"));
const FavoritesPage = lazy(() => import("../pages/favorites-page"));
const CoinDetail = lazy(() => import("../pages/coin-detail"));

export const RootRoutes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 64,
                position: "static",
                margin: "30px 50%",
              }}
              spin
            />
          }
        />
      }
    >
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.DETAIL} element={<CoinDetail />} />
          <Route
            path={ROUTES.FAVORITES}
            element={
              <ProtectedRoute>
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.HISTORY}
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

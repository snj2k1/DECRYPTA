# Decrypta

Приложение для отслеживания курсов криптовалют.

❗❗❗ **Использовал CoinGecko API. Есть ограничение в 30 запросов/мин**

https://decrypta.vercel.app/

## Что выполнено:

### 1 уровень (обязательный - необходимый минимум)

-   [x] Реализованы **Требования к функциональности**, описанные в прикрепленном документе в гугл классе.
-   [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется **localStorage**.

**React**

-   [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
-   [x] Есть разделение на **умные и глупые компоненты**. [CryptoItem](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/screens/crypto-item/crypto-item.tsx), [CryptoList](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/screens/crypto-list/crypto-list.tsx)
-   [x] Есть **рендеринг списков**. [CryptoList](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/screens/crypto-list/crypto-list.tsx)
-   [x] Реализована хотя бы одна **форма**. [LoginModal](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/shared/login-modal/login-modal.tsx)
-   [x] Есть применение **Контекст API**. [CurrencyContext](https://github.com/snj2k1/DECRYPTA/blob/main/src/context/currency-context/currency-context.tsx)
-   [x] Есть применение **предохранителя**. [index](https://github.com/snj2k1/DECRYPTA/blob/main/src/index.tsx)
-   [x] Есть хотя бы один **кастомный хук**. [useHistory](https://github.com/snj2k1/DECRYPTA/blob/main/src/hooks/use-history.ts)
-   [x] Хотя бы несколько компонентов используют **PropTypes**. [CoinDetailInfo](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/screens/coin-detail-info/coin-detail-info.tsx), [HistoryItem](https://github.com/snj2k1/DECRYPTA/blob/main/src/components/screens/history-item/history-item.tsx)
-   [x] Поиск не должен триггерить много запросов к серверу (**debounce**). [SearchPage](https://github.com/snj2k1/DECRYPTA/blob/main/src/pages/search-page/search-page.tsx)
-   [x] Есть применение **lazy + Suspense**. [RootRoutes](https://github.com/snj2k1/DECRYPTA/blob/main/src/routes/root-routes.tsx)

**Redux**

-   [x] Используем **Modern Redux with Redux Toolkit**. [store](https://github.com/snj2k1/DECRYPTA/blob/main/src/store/store.ts)
-   [x] Используем **слайсы**. [authSlice](https://github.com/snj2k1/DECRYPTA/blob/main/src/store/slices/auth-slice.ts)
-   [x] Есть хотя бы одна **кастомная мидлвара**. [logger](https://github.com/snj2k1/DECRYPTA/blob/main/src/store/middleware/logger.ts)
-   [x] Используется **RTK Query**. [coinlistApi](https://github.com/snj2k1/DECRYPTA/blob/main/src/store/rtk-query/coinlist-api.ts)
-   [x] Используется **Transforming Responses**. [authSlice](https://github.com/snj2k1/DECRYPTA/blob/main/src/store/slices/auth-slice.ts)

### 2 уровень (необязательный)

-   [x] Использование **TypeScript**.

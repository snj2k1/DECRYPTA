import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../layout/layout";
import { CryptoList } from "../screens/crypto-list/crypto-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CryptoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

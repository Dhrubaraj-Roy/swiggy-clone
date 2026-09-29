import { Routes, Route, BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";

import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import RestaurantsPage from "./pages/RestaurantsPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurent" element={<RestaurantsPage />} />
            <Route path="/city/delhi/:id" element={<RestaurantDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

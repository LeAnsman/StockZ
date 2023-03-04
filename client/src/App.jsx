import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import { UserContextProvider } from "./context/UserContext";
import ProductPage from "./pages/ProductPage";
import Page404 from "./pages/Page404";

axios.defaults.baseURL = "http://localhost:4001";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/men" element={<ProductsPage />} />
          <Route path="/products/women" element={<ProductsPage />} />
          <Route path="/products/kids" element={<ProductsPage />} />
          <Route path="/products/new" element={<ProductsPage />} />
          <Route path="/products/sale" element={<ProductsPage />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

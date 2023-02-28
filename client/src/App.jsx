import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products/men" element={<ProductsPage />} />
        <Route path="/products/women" element={<ProductsPage />} />
        <Route path="/products/kids" element={<ProductsPage />} />
        <Route path="/products/new" element={<ProductsPage />} />
        <Route path="/products/sale" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

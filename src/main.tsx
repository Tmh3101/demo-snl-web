import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ProductListPage, ProductDetailPage } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:productCode" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

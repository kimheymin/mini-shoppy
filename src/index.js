import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import { RouterProvider } from "react-router";
import Login from "./pages/Login";
import LikeProducts from "./pages/LikeProducts";
import Products from "./pages/products/Products";
import NewProducts from "./pages/products/NewProducts";
import ProtectedRoute from "./components/header/ProtectedRoute";
import ProductDetail from "./pages/products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProducts />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:id", element: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/like",
        element: (
          <ProtectedRoute>
            <LikeProducts />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

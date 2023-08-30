import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { selectLoggedInUser } from "./features/auth/AuthSlice";
import Protected from "./features/auth/component/Protected";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./pages/404";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignUpPage from "./pages/SignUpPage";
import UserOrderPage from "./pages/UserOrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUser } from "./features/user/userAPI";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
       
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "/orders",
    element:   <UserOrderPage />,
  }, {
    path: "/profile",
    element:   <UserProfilePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

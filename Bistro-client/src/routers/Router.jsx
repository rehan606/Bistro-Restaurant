import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePages/Home";
import Menu from "../Pages/MenuPages/Menu";
import Order from "../Pages/OrderPages/Order";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>,
        },
        {
            path: 'order/:category',
            element: <Order></Order>
        }
      ]
    },
]);
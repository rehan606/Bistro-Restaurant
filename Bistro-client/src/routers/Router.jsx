import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePages/Home";
import Menu from "../Pages/MenuPages/Menu";
import Order from "../Pages/OrderPages/Order";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Secrate from "../Pages/Authentication/Secrate";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashboardPages/Cart";
import AllUsers from "../Pages/DashboardPages/AllUsers";

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
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signUp',
            element: <SignUp></SignUp>
        },
        {
            path: 'secrate',
            element: <PrivetRoute> <Secrate></Secrate>  </PrivetRoute> 
        },
      ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute> <Dashboard></Dashboard> </PrivetRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // Admin routes 
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);
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
import AllUsers from "../Pages/DashboardPages/Admin/AllUsers";
import AddItem from "../Pages/DashboardPages/Admin/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashboardPages/Admin/ManageItems";
import UpdateItem from "../Pages/DashboardPages/Admin/UpdateItem";
import PaymentHistory from "../Pages/DashboardPages/Payment/PaymentHistory";
import Payment from "../Pages/DashboardPages/Payment/Payment";

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
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            // Admin routes 
            {
                path: 'users',
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>,
            },
            {
                path: 'addItem',
                element: <AdminRoute> <AddItem></AddItem> </AdminRoute>,
            },
            {
                path: 'manageItems',
                element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute> ,
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
            }
        ]
    }
]);
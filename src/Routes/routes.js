import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cars from "../Pages/Cars/Cars";
import Category from "../Pages/Cars/Category";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/AuthAccounts/Signup";
import Signin from "../Pages/AuthAccounts/Login"
import DashboardLayout from "../Layouts/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders";
import SellerRoute from "./SellerRoute";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import Sellers from "../Pages/Dashboard/Admin/Sellers";
import Buyers from "../Pages/Dashboard/Admin/Buyers";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cars',
                element: <Cars></Cars>,
                loader: () => fetch('https://hero-cars-server.vercel.app/cars')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:category',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://hero-cars-server.vercel.app/cars/${params.category}`)
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Signin></Signin>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>,
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default routes;
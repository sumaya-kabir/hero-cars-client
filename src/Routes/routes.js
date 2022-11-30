import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cars from "../Pages/Cars/Cars";
import Category from "../Pages/Cars/Category";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/AuthAccounts/Signup";
import Signin from "../Pages/AuthAccounts/Login"
import DashboardLayout from "../Layouts/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import Sellers from "../Pages/Dashboard/Admin/Sellers";
import Buyers from "../Pages/Dashboard/Admin/Buyers";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../Pages/CommonPages/Payments/Payment";
import AllUsers from "../Pages/Dashboard/AllUSers/AllUsers";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import MyWishlist from "../Pages/Dashboard/Admin/MyWishlist";




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
                element: <PrivateRoutes><Category></Category></PrivateRoutes>,
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
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishlist></MyWishlist>
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
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><Sellers></Sellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><Buyers></Buyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params}) => fetch(`https://hero-cars-server.vercel.app/bookings/${params.id}`),
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default routes;
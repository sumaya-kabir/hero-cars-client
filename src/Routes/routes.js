import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cars from "../Pages/Cars/Cars";
import Category from "../Pages/Cars/Category";
import Home from "../Pages/Home/Home";

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
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: '/category/:category',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.category}`)
            },
        ]
    }
]);

export default routes;
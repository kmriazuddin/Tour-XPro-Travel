import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Home/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'contactUs',
                element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
            }
        ]
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'logIn',
        element: <Login></Login>
    }
]);

export default Routes;
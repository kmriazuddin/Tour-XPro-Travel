import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Home/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Booking from "../Pages/Dashboard/Booking/Booking";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddTour from "../Pages/Dashboard/AddTour/AddTour";
import ManageTour from "../Pages/Dashboard/ManageTour/ManageTour";

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
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
          // Normal User Routes
          {
            path: 'userHome',
            element: <UserHome></UserHome>
          },
          {
            path: 'booking',
            element: <Booking></Booking>
          },
          // Admin Routes
        //  {
        //     path: 'adminHome',
        //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        //   },
          {
            path: 'addTour',
            element: <AdminRoute><AddTour></AddTour></AdminRoute>
          },
          {
            path: 'manageTour',
            element: <AdminRoute><ManageTour></ManageTour></AdminRoute>
          },
        //   {
        //     path: 'updateItem/:id',
        //     element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
        //     loader: ({params}) => fetch(`https://bistro-boss.onrender.com/menu/${params.id}`)
        //   },
          {
            path: 'allusers',
            element: <AllUsers></AllUsers>
          }
        ]
      }
]);

export default Routes;
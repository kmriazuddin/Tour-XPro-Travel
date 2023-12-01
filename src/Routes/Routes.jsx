import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Booking from "../Pages/Dashboard/Booking/Booking";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddTour from "../Pages/Dashboard/AddTour/AddTour";
import ManageTour from "../Pages/Dashboard/ManageTour/ManageTour";
import UpdateTour from "../Pages/Dashboard/UpdateTour/UpdateTour";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PackageDetails from "../Pages/Home/OurPackage/PackageDetails";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Payment/PaymentHistory";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";

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
                element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
            },
            {
              path: 'blog',
              element: <Blog></Blog>
            },
            {
              path: 'contactUs',
              element: <ContactUs></ContactUs>
            },
            {
              path: 'aboutUs',
              element: <AboutUs></AboutUs>
            },
            {
              path: 'packages/:id',
              element: <PrivateRoutes><PackageDetails></PackageDetails></PrivateRoutes>,
              loader: () => fetch(`https://tour-xpro-travel.onrender.com/packages`)
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
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path: 'review',
            element: <AddReview></AddReview>
          },
          {
            path: 'myBooking',
            element: <MyBooking></MyBooking>
          },
          // Admin Routes
         {
            path: 'adminHome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path: 'addTour',
            element: <AdminRoute><AddTour></AddTour></AdminRoute>
          },
          {
            path: 'manageTour',
            element: <AdminRoute><ManageTour></ManageTour></AdminRoute>
          },
          {
            path: 'manageBooking',
            element: <ManageBooking></ManageBooking>
          },
          {
            path: 'updateTour/:id',
            element: <AdminRoute><UpdateTour></UpdateTour></AdminRoute>,
            loader: ({params}) => fetch(`https://tour-xpro-travel.onrender.com/packages/${params.id}`)
          },
          {
            path: 'allusers',
            element: <AllUsers></AllUsers>
          }
        ]
      }
]);

export default Routes;
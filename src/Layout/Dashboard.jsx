import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuBadgePlus } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FcMindMap } from "react-icons/fc";
import { FaRegCalendarAlt, FaRegCalendarCheck, FaStar, FaUsers } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import useBooking from "../Hooks/useBooking";
import useAdmin from "../Hooks/useAdmin";
import AdminNavBar from "../Pages/Dashboard/Admin/AdminNavBar";

const Dashboard = () => {
    const [bookings] = useBooking();

    // Get IsAdmin VAlue From The Database
    const [isAdmin] = useAdmin();
    return (
        <div>
            <Helmet>
                <title>Tour XPro Travel | Dashboard</title>
            </Helmet>
            <AdminNavBar></AdminNavBar>
            <div className="flex">
                {/* Dashboard Side Bar */}
                <div className="w-64 min-h-screen bg-green-400">
                    <ul className="menu">
                        {/* Shared Nav Links */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminHome"><IoHomeOutline />Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addTour"><LuBadgePlus /> Add Tour</NavLink></li>
                                <li><NavLink to="/dashboard/manageTour"><FcMindMap /> Manage Tour</NavLink></li>
                                <li><NavLink to="/dashboard/manageBooking"><GiBookmarklet /> Manage bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/userHome"><IoHomeOutline />
                                    User Home</NavLink></li>
                                <li><NavLink to="/dashboard/booking"><AiOutlineShoppingCart /> My Booking ({bookings.length})</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><MdOutlinePayment /> Payment Gateway</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"><FaRegCalendarAlt /> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaStar /> Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/myBooking"><FaRegCalendarCheck /> Booking History</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><IoHomeOutline />Home</NavLink></li>
                        <li><NavLink to="/contactUs"><RiContactsBookLine />Contact</NavLink></li>
                    </ul>
                </div>
                {/* Dashboard Content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
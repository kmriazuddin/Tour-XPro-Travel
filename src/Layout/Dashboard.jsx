import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegCalendarAlt, FaRegCalendarCheck, FaStar, FaUtensils, FaUsers } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import useBooking from "../Hooks/useBooking";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [bookings] = useBooking();

    // Get IsAdmin VAlue From The Database
    const [isAdmin] = useAdmin();
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="flex">
                {/* Dashboard Side Bar */}
                <div className="w-64 min-h-screen bg-orange-400">
                    <ul className="menu">
                        {/* Shared Nav Links */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminHome"><IoHomeOutline />
                                    Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additems"><MdOutlineRestaurantMenu /> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaUtensils /> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><GiBookmarklet /> Manage bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/userHome"><IoHomeOutline />
                                    User Home</NavLink></li>
                                <li><NavLink to="/dashboard/booking"><AiOutlineShoppingCart /> My Booking ({bookings.length})</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><MdOutlinePayment /> Payment Gateway</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"><FaRegCalendarAlt /> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaStar /> Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/bookin"><FaRegCalendarCheck /> My Booking</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><IoHomeOutline />Home</NavLink></li>
                        <li><NavLink to="/menu"><MdOutlineRestaurantMenu />Menu</NavLink></li>
                        <li><NavLink to="/contact"><RiContactsBookLine />Contact</NavLink></li>
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
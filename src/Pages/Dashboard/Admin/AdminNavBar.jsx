import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer z-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#ffffff] drop-shadow-xl flex items-center">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <NavLink to='/'><img className="bg-white" src="https://i.ibb.co/MsTzMdz/logo.png" alt="logo" /></NavLink>
                        </div>
                        <div>
                            <ul className="menu menu-horizontal space-x-3">
                                {NavLinks}
                            </ul>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <div className="dropdown dropdown-end">
                                <details className="dropdown">
                                    <summary className="m-1 btn btn-circle avatar">
                                        <div className="w-14 rounded-full border-red-200 border-2">
                                            <img alt="User Image" src={user?.photoURL} />
                                        </div>
                                    </summary>
                                    <ul tabIndex={0} className="mt-3 -z-50 p-2 shadow menu menu-sm dropdown-content bg-slate-500 rounded w-52 space-y-3">
                                        <p className="text-lg bg-green-500 hover:bg-green-600 py-2 px-3 text-white">{user?.email}</p>
                                        <li className="text-lg bg-green-500 hover:bg-green-600 py-2 px-3 text-white">{user?.displayName}</li>
                                        {
                                            user ? <><button onClick={handleLogOut} className="bg-pink-500 hover:bg-pink-600 p-2 rounded-md text-white font-semibold">Log Out</button></> : <><button className="bg-pink-500 hover:bg-pink-600 py-2 px-3 rounded-md text-white font-semibold"><NavLink to='/logIn'>Login</NavLink></button></>
                                        }
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavBar;

import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./components/Loading";

const RootLaout = () => {

    const [cart, setCart] = useState([]);

    const location = useLocation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, [location.pathname]);


    return (
        <div className="min-h-screen flex flex-col bg-slate-950">

            <nav className="bg-slate-900 text-white px-6 md:px-12 py-4 flex justify-between items-center shadow-lg">

                <h1 className="text-2xl font-bold text-pink-500">
                    AI Explorer
                </h1>

                <div className="flex gap-2">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition duration-300 ${
                                isActive
                                    ? "bg-pink-500 text-white"
                                    : "text-gray-300 hover:bg-slate-800 hover:text-pink-400"
                            }`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/pages"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition duration-300 ${
                                isActive
                                    ? "bg-pink-500 text-white"
                                    : "text-gray-300 hover:bg-slate-800 hover:text-pink-400"
                            }`
                        }
                    >
                        Explore
                    </NavLink>


                    <NavLink
                        to="/add"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition duration-300 ${
                                isActive
                                    ? "bg-pink-500 text-white"
                                    : "text-gray-300 hover:bg-slate-800 hover:text-pink-400"
                            }`
                        }
                    >
                        Categories
                    </NavLink>


                    <NavLink
                        to="/Analytics"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg transition duration-300 ${
                                isActive
                                    ? "bg-pink-500 text-white shadow-md"
                                    : "text-gray-300 hover:bg-slate-800 hover:text-pink-400"
                            }`
                        }
                    >
                        Analytics
                    </NavLink>

                </div>

            </nav>


            {loading && <Loading />}

            <main className="flex-1">
                <Outlet context={[cart, setCart]} />
            </main>



            <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 text-center py-5">

                <p>
                    © 2026{" "}
                    <span className="text-pink-500 font-semibold">
                        AI Explorer
                    </span>
                    . All Rights Reserved.
                </p>

            </footer>


            <ToastContainer />

        </div>
    );
};

export default RootLaout;
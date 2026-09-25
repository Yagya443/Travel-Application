import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate=useNavigate()

    const storage = localStorage.getItem("token");

    const handleLogOut=()=>{
        navigate('/')
        localStorage.removeItem("token");
    }

    return (
        <div className="fixed flex gap-2 items-center justify-between bg-gray-700 py-3 px-8 w-screen z-50 md:px-4">
            <div className="flex items-center">
                <MdTravelExplore size={30} fill={"white"} />
                <h1 className="text-white text-2xl font-bold text-nowrap">Wix Travel</h1>
            </div>
            {storage && (
                <div className="flex text-white gap-4 border border-white px-1 py-1 rounded-sm text-2xl md:text-xl">
                    <NavLink
                        className={({ isActive }) =>
                            `px-6 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                        }
                        to="/overview"
                    >
                        Overview
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-6 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                        }
                        to="/planner"
                    >
                        Planner
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-6 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                        }
                        to="/audit"
                    >
                        Audit
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-6 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                        }
                        to="/journey"
                    >
                        Journey
                    </NavLink>
                </div>
            )}
            {storage && 
            <div onClick={handleLogOut} >
                <IoIosLogOut className="text-white hover:text-red-400 cursor-pointer" size={25} />
            </div>

            }
        </div>
    );
};

export default Navbar;

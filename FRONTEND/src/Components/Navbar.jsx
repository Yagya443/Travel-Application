import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="fixed flex gap-2 items-center justify-between bg-gray-700 py-2 px-4 w-screen">
            <div className="flex items-center">
                <MdTravelExplore size={35} fill={"white"} />
                <h1 className="text-white text-2xl font-bold">Wix Travel</h1>
            </div>

            <div className="flex text-white gap-4 border border-white px-1 py-1 rounded-sm text-2xl ">
                <NavLink
                    className={({ isActive }) =>
                        `px-2 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                    }
                    to="/overview"
                >
                    Overview
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `px-2 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                    }
                    to="/planner"
                >
                    Planner
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `px-2 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                    }
                    to="/audit"
                >
                    Audit
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `px-2 rounded-lg ${isActive ? "bg-blue-500" : ""}`
                    }
                    to="/journey"
                >
                    Journey
                </NavLink>
            </div>

            <div className="">
                <IoIosLogOut fill="white" size={25} />
            </div>
        </div>
    );
};

export default Navbar;

import React from "react";
import {
    MapPin,
    CalendarDays,
    Users,
    Plus,
    Clock3,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Dashboard = () => {
    // const getMe = async () => {
    //     const token = localStorage.getItem("token");

    //     const response = await axios.get("http://localhost:3000/me", {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     });
    //     console.log(response.data);

    //     return response.data;
    // };

    // const { data, isLoading, isError, error } = useQuery({
    //     queryKey: ["user"],
    //     queryFn: getMe,
    // });

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return (
    //         <div>
    //             Error:{" "}
    //             {error?.response?.data?.message || "Something went wrong"}
    //         </div>
    //     );
    // }

    const upcomingTrips = [
        {
            id: 1,
            destination: "Manali, India",
            startDate: "Sep 12, 2026",
            endDate: "Sep 16, 2026",
            travelers: 2,
            duration: "4 Days",
            image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
            status: "Upcoming",
        },
        {
            id: 2,
            destination: "Goa, India",
            startDate: "Oct 20, 2026",
            endDate: "Oct 24, 2026",
            travelers: 3,
            duration: "4 Days",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
            status: "Upcoming",
        },
    ];

    const recentTrips = [
        {
            id: 3,
            destination: "Jaipur, India",
            date: "Aug 02, 2026",
            duration: "3 Days",
        },
        {
            id: 4,
            destination: "Kerala, India",
            date: "Jul 15, 2026",
            duration: "5 Days",
        },
        {
            id: 5,
            destination: "Mumbai, India",
            date: "Jun 28, 2026",
            duration: "2 Days",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-800 text-slate-900">
            <main className="">
                {/* Navbar */}

                {/* Content */}
                <div className="mx-auto max-w-7xl space-y-8 p-8 ">
                    <section className="relative overflow-hidden rounded-3xl bg-gray-900 mt-12 p-7 text-white md:p-10">
                        <div className="relative z-10 ">
                            <div className="mb-4 flex w-fit items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium">
                                <Sparkles size={14} />
                                AI Powered Travel Planning
                            </div>

                            <h1 className="text-3xl font-bold">
                                Where will you go next?
                            </h1>

                            <p className="mt-3 max-w-lg text-md leading-6 text-blue-100 ">
                                Let AI create a personalized itinerary based on
                                your destination, budget, travel style and
                                interests.
                            </p>

                            <Link
                                to="/planner"
                                className="mt-6 flex items-center w-44 gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition"
                            >
                                <Sparkles size={17} />
                                Create AI Trip
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </section>

                    {/* <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            icon={<Compass size={20} />}
                            label="Total Trips"
                            value="12"
                        />

                        <StatCard
                            icon={<Plane size={20} />}
                            label="Upcoming Trips"
                            value="2"
                        />

                        <StatCard
                            icon={<MapPin size={20} />}
                            label="Places Visited"
                            value="18"
                        />

                        <StatCard
                            icon={<Heart size={20} />}
                            label="Saved Places"
                            value="24"
                        />
                    </section> */}

                    <section>
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Upcoming Trips
                                </h2>

                                <p className=" text-sm text-blue-500">
                                    Your next adventures
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-2">
                            {upcomingTrips.map((trip) => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Recent Trips */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 col-span-2">
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <h2 className="font-bold">Recent Trips</h2>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Your recently planned trips
                                    </p>
                                </div>

                                <button className="text-sm font-semibold text-blue-600">
                                    View all
                                </button>
                            </div>

                            <div>
                                {recentTrips.map((trip) => (
                                    <div
                                        key={trip.id}
                                        className="flex items-center justify-between py-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                                <MapPin size={18} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold">
                                                    {trip.destination}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    {trip.date} •{" "}
                                                    {trip.duration}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-xs font-semibold text-blue-600">
                                            View
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Action */}
                        <div className="rounded-2xl bg-white p-5">
                            <div className="mb-5">
                                <h2 className="font-bold">Quick Actions</h2>

                                <p className="mt-1 text-xs text-slate-500">
                                    Manage your travel plans
                                </p>
                            </div>

                            <div className="space-y-3">
                                <QuickAction
                                    icon={<Plus size={18} />}
                                    title="Create New Trip"
                                    description="Plan your next adventure"
                                />

                                <QuickAction
                                    icon={<CiBookmark size={18} />}
                                    title="Saved Places"
                                    description="Explore your wishlist"
                                />

                                <QuickAction
                                    icon={<CalendarDays size={18} />}
                                    title="Travel Calendar"
                                    description="View upcoming plans"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

// const StatCard = ({ icon, label, value }) => {
//     return (
//         <div className="rounded-2xl border border-slate-200 bg-white p-5">
//             <div className="flex items-center justify-between">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//                     {icon}
//                 </div>

//                 <ArrowRight size={16} className="text-slate-300" />
//             </div>

//             <p className="mt-4 text-2xl font-bold">{value}</p>

//             <p className="mt-1 text-xs text-slate-500">{label}</p>
//         </div>
//     );
// };

const TripCard = ({ trip }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={trip.image}
                    alt={trip.destination}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 ">
                    {trip.status}
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-bold">
                            {trip.destination}
                        </h3>

                        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                            <CalendarDays size={14} />
                            {trip.startDate} - {trip.endDate}
                        </div>
                    </div>

                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div className="mt-5 flex items-center gap-5 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock3 size={14} />
                        {trip.duration}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Users size={14} />
                        {trip.travelers} Travelers
                    </div>
                </div>
            </div>
        </div>
    );
};

const QuickAction = ({ icon, title, description }) => {
    return (
        <button className="flex cursor-pointer w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-blue-100 hover:bg-blue-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {icon}
            </div>

            <div>
                <p className="text-sm font-semibold">{title}</p>

                <p className="mt-0.5 text-xs text-slate-500">{description}</p>
            </div>
        </button>
    );
};

export default Dashboard;

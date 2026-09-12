import React from "react";
import { Globe2, MapPin } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { useGetTrips } from "../../Hooks/trip.hooks";

const Journey = () => {
    const { data: trips, isLoading, isError } = useGetTrips();

    const completedTrips = trips?.allTrip?.filter(
        (trip) => new Date(trip.endDate) < new Date(),
    );

    return (
        <div className="min-h-screen bg-gray-800 text-slate-900 px-6 py-20 ">
            <div className="mx-auto max-w-6xl ">
                <div className="mb-8">
                    <div className="mb-2 flex items-center gap-2 text-blue-600">
                        <Globe2 size={20} />
                        <span className="text-sm font-semibold">
                            YOUR JOURNEY
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-white">
                        Places you've explored
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Keep track of the countries you've discovered.
                    </p>
                </div>

                {/* Main Card */}
                <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-gray-900 grid-cols-2">
                    {/* LEFT — IMAGE */}
                    <div className="relative min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
                            alt="Travel"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Image content */}
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                                Your adventures
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                7 Countries
                            </h2>

                            <p className="mt-2 max-w-sm text-sm text-white/80">
                                Every destination has a story.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — COUNTRIES */}
                    <div className="p-6 md:p-8">
                        <div className="mb-6 flex items-center text-white justify-between">
                            <div>
                                <h2 className="text-xl font-bold ">
                                    Countries
                                </h2>

                                <p className="mt-1 text-sm ">
                                    Your travel history
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Globe2 size={18} />
                            </div>
                        </div>

                        <div className="max-h-105 space-y-2 pr-2 text-white">
                            {completedTrips?.length == 0 ? (
                                <div className=" text-2xl font-semibold  uppercase flex items-center justify-center  rounded-2xl bg-gray-900 text-blue-500 ">
                                    You Don't Have any recenet trip
                                </div>
                            ) : (
                                <div>
                                    {completedTrips?.map((country, index) => (
                                        <div
                                            key={country.name}
                                            className="group flex cursor-pointer items-center justify-between rounded-2xl p-3 transition border-2 border-transparent hover:border-gray-50"
                                        >
                                            <div className="flex items-center gap-4 ">
                                                <span className="w-5 text-xs font-medium text-slate-400">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-700 text-2xl">
                                                    {country.flag}
                                                </div>

                                                {/* Country */}
                                                <div>
                                                    <h3 className="font-semibold">
                                                        {country.name}
                                                    </h3>

                                                    <div className="mt-1 flex items-center gap-1 text-xs">
                                                        <MapPin size={12} />
                                                        {country.places}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                                                →
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;

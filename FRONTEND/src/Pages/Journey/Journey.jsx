import React from "react";
import { Globe2, MapPin, ArrowRight, Clock3, Users } from "lucide-react";
import { useGetTrips } from "../../Hooks/trip.hooks";

const Journey = () => {
    const { data: trips, isLoading, isError } = useGetTrips();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-800 flex items-center justify-center text-white">
                Loading your journey...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-screen bg-gray-800 flex items-center justify-center text-red-400">
                Failed to load your journey.
            </div>
        );
    }

    // Only trips that were marked as completed
    const completedTrips = trips?.allTrip?.filter((trip) => trip.visited) || [];

    return (
        <div className="min-h-screen bg-gray-800 px-6 py-20 text-slate-900">
            <div className="mx-auto max-w-6xl">
                {/* HEADER */}
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
                        Keep track of the trips you've completed.
                    </p>
                </div>

                {/* MAIN CARD */}
                <div className="grid overflow-hidden rounded-3xl border border-slate-700 bg-gray-900 lg:grid-cols-2">
                    {/* LEFT IMAGE */}
                    <div className="relative min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
                            alt="Travel"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Image content */}
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                                Your adventures
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {completedTrips.length} Trips
                            </h2>

                            <p className="mt-2 max-w-sm text-sm text-white/80">
                                Every destination has a story.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="p-6 md:p-8">
                        {/* TITLE */}
                        <div className="mb-6 flex items-center justify-between text-white">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Completed Trips
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Your travel history
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Globe2 size={18} />
                            </div>
                        </div>

                        {/* TRIPS */}
                        <div className="max-h-[420px] space-y-3 overflow-y-auto pr-2">
                            {completedTrips.length === 0 ? (
                                <div className="flex min-h-48 items-center justify-center rounded-2xl border border-slate-700 bg-gray-800 p-6 text-center">
                                    <div>
                                        <Globe2
                                            size={35}
                                            className="mx-auto mb-3 text-slate-600"
                                        />

                                        <p className="text-lg font-semibold text-blue-500">
                                            No completed trips
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Complete a trip and it will appear
                                            here.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                completedTrips.map((trip, index) => (
                                    <div
                                        key={trip._id}
                                        className="group flex items-center justify-between rounded-2xl border border-transparent bg-gray-800 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-gray-700"
                                    >
                                        {/* LEFT */}
                                        <div className="flex items-center gap-4">
                                            {/* NUMBER */}
                                            <span className="w-5 text-xs font-medium text-slate-500">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            {/* ICON */}
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                                                <MapPin size={20} />
                                            </div>

                                            {/* INFO */}
                                            <div>
                                                <h3 className="font-semibold text-white">
                                                    {trip.destination}
                                                </h3>

                                                <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Clock3 size={12} />
                                                        {trip.duration} Days
                                                    </span>

                                                    <span className="flex items-center gap-1">
                                                        <Users size={12} />
                                                        {trip.unitCount}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* RIGHT */}
                                        <div className="flex items-center gap-3">
                                            <span className="hidden rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500 sm:block">
                                                Completed
                                            </span>

                                            <ArrowRight
                                                size={18}
                                                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-500"
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;

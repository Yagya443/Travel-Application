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
import { Link, useNavigate } from "react-router-dom";
import {
    useDeleteTrip,
    useEditTrip,
    useGetTrips,
} from "../../Hooks/trip.hooks";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
    const navigate = useNavigate();
    const { data: trips, isLoading, isError } = useGetTrips();
    const { mutate: editTrip } = useEditTrip();
    const { mutate: deleteTrip } = useDeleteTrip();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Something Went wrong...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-800 text-slate-900">
            <div className="mx-auto max-w-7xl space-y-8 p-8  ">
                <section className="relative overflow-hidden rounded-xl bg-gray-900 mt-12 text-white md:p-6">
                    <div className="relative z-10 ">
                        <div className="mb-4 flex w-fit items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium">
                            <Sparkles size={14} />
                            AI Powered Travel Planning
                        </div>

                        <h1 className="text-3xl font-bold">
                            Where will you go next?
                        </h1>

                        <p className="mt-1 max-w-lg text-blue-100 ">
                            Let AI create a personalized itinerary based on your
                            destination, budget, travel style and interests.
                        </p>

                        <Link
                            to="/planner"
                            className="mt-4 flex items-center w-44 gap-2 rounded-xl bg-gray-800 px-4 py-2 text-sm font-semibold text-blue-600 transition"
                        >
                            <Sparkles size={17} />
                            Create AI Trip
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </section>

                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        Upcoming Trips
                    </h2>

                    <p className=" text-sm text-blue-500">
                        Your next adventures
                    </p>
                </div>

                {trips?.allTrip.length === 0 ? (
                    <div className=" h-48 text-2xl font-semibold  uppercase flex items-center justify-center  rounded-2xl border border-white bg-gray-900 text-blue-500 ">
                        There Are No Upcoming Trips
                    </div>
                ) : (
                    <div className="grid gap-5 grid-cols-2">
                        {trips.allTrip?.map(
                            (trip) =>
                                !trip.visited && (
                                    <div
                                        onClick={() =>
                                            navigate(`/tripplan/${trip._id}`)
                                        }
                                        key={trip._id}
                                        className="group  overflow-hidden rounded-2xl border border-white bg-gray-900 transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={
                                                    "https://images.unsplash.com/photo-1790440573092-e947bde863b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                }
                                                alt={trip.destination}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                            <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-600 ">
                                                {trip.operationalTier}
                                            </div>
                                        </div>

                                        <div className="p-3">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-lg font-bold text-white">
                                                    {trip.destination}
                                                </h3>

                                                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 transition-all duration-200 hover:text-slate-700">
                                                    <ArrowRight size={18} />
                                                </button>
                                            </div>

                                            <div className="mt-2 flex items-center justify-between gap-5 border-t border-slate-100 pt-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                        <Clock3 size={14} />
                                                        {trip.duration} Days
                                                    </div>

                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                        <Users size={14} />
                                                        {trip.unitCount}{" "}
                                                        Travelers
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={() =>
                                                            deleteTrip({
                                                                tripId: trip._id,
                                                            })
                                                        }
                                                        className="rounded-lg bg-white p-2 transition-all duration-200 hover:scale-105 hover:text-red-500 hover:bg-red-50"
                                                    >
                                                        <MdDelete size={15} />
                                                    </button>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();

                                                            editTrip({
                                                                tripId: trip._id,
                                                                tripData: {
                                                                    visited: true,
                                                                },
                                                            });
                                                        }}
                                                        className=" bg-white py-1 px-4 font-semibold cursor-pointer hover:scale-105 rounded-lg transition-all duration-200"
                                                    >
                                                        Mark as Complete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>
                )}

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-gray-900 p-5 col-span-2">
                        <div className="pb-3 mb-2 flex items-center justify-between border-b-2 border-white">
                            <div>
                                <h2 className="font-bold text-white">
                                    Recent Trips
                                </h2>

                                <p className="mt-1 text-xs text-slate-500">
                                    Your recently planned trips
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/journey")}
                                className="cursor-pointer text-sm font-semibold text-blue-600"
                            >
                                View all
                            </button>
                        </div>

                        <div className="max-h-64 overflow-y-auto scrollbar-none">
                            {trips?.allTrip.filter((trip) => trip.visited)
                                .length === 0 ? (
                                <div className="flex h-40 flex-col items-center justify-center text-center">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                                        <MapPin
                                            size={20}
                                            className="text-white/30"
                                        />
                                    </div>

                                    <p className="text-sm font-semibold text-white">
                                        No completed trips yet
                                    </p>

                                    <p className="mt-1 text-xs text-white/40">
                                        Your completed trips will appear here
                                    </p>
                                </div>
                            ) : (
                                trips?.allTrip
                                    .filter((trip) => trip.visited)
                                    .map((trip) => (
                                        <div
                                            key={trip._id}
                                            className="group flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 hover:bg-white/5"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Icon */}
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                                                    <MapPin size={18} />
                                                </div>

                                                {/* Trip information */}
                                                <div>
                                                    <p className="text-sm font-semibold text-white">
                                                        {trip.destination}
                                                    </p>

                                                    <div className="mt-1 flex items-center gap-2">
                                                        <span className="text-xs text-white/40">
                                                            {trip.duration} Days
                                                        </span>

                                                        <span className="text-white/20">
                                                            •
                                                        </span>

                                                        <span className="text-xs text-white/40">
                                                            {trip.unitCount}{" "}
                                                            Travelers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right side */}
                                            <div className="flex items-center gap-3">
                                                <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-semibold text-green-400">
                                                    Completed
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/tripplan/${trip._id}`,
                                                        )
                                                    }
                                                    className="rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-400 transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-300"
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            )}
                        </div>
                    </div>

                    {/* Quick Action */}
                    <div className="rounded-2xl bg-gray-900 p-5">
                        <div className="mb-5">
                            <h2 className="font-bold text-white">
                                Quick Actions
                            </h2>

                            <p className="mt-1 text-xs text-white/60">
                                Manage your travel plans
                            </p>
                        </div>

                        <div className="space-y-3 text-white">
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
        </div>
    );
};

const QuickAction = ({ icon, title, description }) => {
    return (
        <button className="flex cursor-pointer w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition">
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

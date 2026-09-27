import { CalendarDays, MapPin, Sun, Sunset, Moon, Wallet } from "lucide-react";

import { useLocation } from "react-router-dom";
import DaySection from "./DaySection";



const TripPlan = () => {
    const location = useLocation()

    const result = location.state?.tripPlan;

    const tripId = location.state?.tripId;

    console.log("TripPlan location state:", location.state);
    console.log("TripPlan result:", result);

    const plan = result?.plan;
    console.log("TripPlan:", plan);

    if (!plan) {
        return (
            <main className="min-h-screen bg-gray-800 px-6 py-20 text-white lg:px-16">
                <div className="mx-auto max-w-5xl">
                    <div className="rounded-xl border border-gray-700 bg-[#0d0e0f] p-10 text-center">
                        <p className="text-sm text-gray-500">
                            No trip plan data received.
                        </p>

                        <p className="mt-2 text-xs text-gray-600">
                            Check the response returned by your trip-plan API.
                        </p>

                        <pre className="mt-6 overflow-auto rounded-lg bg-black p-4 text-left text-xs text-gray-400">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                </div>
            </main>
        );
    }

    const {
        destination,
        duration,
        travelers,
        travel_style,
        itinerary = [],
    } = plan;

    return (
        <main className="min-h-screen bg-gray-800 px-6 py-20 text-white lg:px-16">
            <div className="mx-auto max-w-5xl">
                <header className="mb-10">
                    <p className="text-xs font-bold tracking-[0.3em] text-blue-500">
                        TRIP PLAN
                    </p>

                    <h1 className="mt-2 text-4xl font-black uppercase">
                        {destination}
                    </h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                        Your complete day-by-day travel plan designed around
                        your destination, budget and travel preferences.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                DURATION
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {duration} Days
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRAVELERS
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {travelers} People
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRAVEL STYLE
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {travel_style}
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRIP ID
                            </p>

                            <p className="mt-1 truncate text-sm font-bold text-blue-400">
                                {tripId || "N/A"}
                            </p>
                        </div>
                    </div>
                </header>

                {itinerary.length > 0 ? (
                    <div className="space-y-6">
                        {itinerary.map((day, index) => (
                            <DayCard key={day?.day || index} day={day} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-gray-700 bg-[#0d0e0f] p-10 text-center">
                        <p className="text-sm text-gray-500">
                            No itinerary data received.
                        </p>

                        <p className="mt-2 text-xs text-gray-600">
                            The trip plan exists, but no itinerary was returned.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default TripPlan;

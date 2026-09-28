import { useLocation } from "react-router-dom";
import DayCard from "./DayCard";

const TripPlan = () => {
    const location = useLocation();

    const result = location.state?.tripPlan;
    const plan = result?.trip?.itinerary;

    console.log("TripPlan:", plan);

    if (!plan) {
        return (
            <main className="min-h-screen bg-gray-800 px-6 py-20 text-white lg:px-16">
                <div className="mx-auto max-w-5xl">
                    <div className="rounded-xl border border-gray-700 bg-[#0d0e0f] p-10 text-center">
                        <p className="text-sm text-gray-500">
                            No trip plan data received.
                        </p>

                        <pre className="mt-6 overflow-auto rounded-lg bg-black p-4 text-left text-xs text-gray-400">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-800 px-6 py-20 text-white lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* HEADER */}
                <header className="mb-10">
                    <p className="text-xs font-bold tracking-[0.3em] text-blue-500">
                        TRIP PLAN
                    </p>

                    <h1 className="mt-2 text-4xl font-black uppercase">
                        {plan.destination}
                    </h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                        Your complete day-by-day travel plan designed around
                        your destination, budget and travel preferences.
                    </p>

                    {/* TRIP INFORMATION */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                DURATION
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {plan.duration} Days
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRAVELERS
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {plan.travelers} People
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRAVEL STYLE
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {plan.travel_style}
                            </p>
                        </div>
                    </div>
                </header>

                {/* ITINERARY */}
                {plan.itinerary?.length > 0 ? (
                    <div className="space-y-6">
                        {plan.itinerary.map((day, index) => (
                            <DayCard key={day?.day || index} day={day} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-gray-700 bg-[#0d0e0f] p-10 text-center">
                        <p className="text-sm text-gray-500">
                            No itinerary data received.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default TripPlan;

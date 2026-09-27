import { useParams } from "react-router-dom";
import {
    CalendarDays,
    MapPin,
    Sun,
    Sunset,
    Moon,
    Wallet,
    Clock,
} from "lucide-react";

const itinerary = [
    {
        day: 1,
        date: "2026-10-01",
        title: "Arrival in Tokyo",
        morning: [
            {
                activity: "Arrive at Narita International Airport",
                location: "Narita Airport",
                cost: 30,
            },
        ],
        afternoon: [
            {
                activity: "Check in to hotel",
                location: "Shibuya",
                cost: 80,
            },
            {
                activity: "Explore Shibuya",
                location: "Shibuya",
                cost: 20,
            },
        ],
        evening: [
            {
                activity: "Visit Shibuya Crossing",
                location: "Shibuya",
                cost: 10,
            },
            {
                activity: "Dinner",
                location: "Shibuya",
                cost: 20,
            },
        ],
        totalCost: 160,
    },

    {
        day: 2,
        date: "2026-10-02",
        title: "Tokyo Exploration",
        morning: [
            {
                activity: "Visit Senso-ji Temple",
                location: "Asakusa",
                cost: 10,
            },
        ],
        afternoon: [
            {
                activity: "Visit Tokyo Skytree",
                location: "Sumida",
                cost: 25,
            },
        ],
        evening: [
            {
                activity: "Explore Akihabara",
                location: "Akihabara",
                cost: 30,
            },
        ],
        totalCost: 65,
    },

    {
        day: 3,
        date: "2026-10-03",
        title: "Mount Fuji Adventure",
        morning: [
            {
                activity: "Travel to Mount Fuji",
                location: "Tokyo → Mount Fuji",
                cost: 40,
            },
        ],
        afternoon: [
            {
                activity: "Explore Lake Kawaguchi",
                location: "Lake Kawaguchi",
                cost: 20,
            },
        ],
        evening: [
            {
                activity: "Return to Tokyo",
                location: "Tokyo",
                cost: 40,
            },
        ],
        totalCost: 100,
    },
];

const Activity = ({ activity }) => {
    return (
        <div className="flex items-start justify-between rounded-lg bg-[#111213] p-4">
            <div>
                <h4 className="text-sm font-semibold text-white">
                    {activity.activity}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} />
                    {activity.location}
                </div>
            </div>

            <span className="text-xs font-bold text-blue-400">
                ${activity.cost}
            </span>
        </div>
    );
};

const DaySection = ({ icon, title, activities }) => {
    if (!activities?.length) return null;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                {icon}
                {title}
            </div>

            <div className="space-y-2">
                {activities.map((activity, index) => (
                    <Activity
                        key={`${activity.activity}-${index}`}
                        activity={activity}
                    />
                ))}
            </div>
        </div>
    );
};

const DayCard = ({ day }) => {
    return (
        <section className="rounded-2xl border border-gray-700 bg-[#0d0e0f] p-6">
            {/* Day Header */}
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <p className="text-xs font-black tracking-[0.2em] text-blue-500">
                        DAY {day.day}
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                        {day.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                        <CalendarDays size={13} />
                        {day.date}
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-2">
                    <Wallet size={14} className="text-blue-400" />

                    <span className="text-xs font-bold text-blue-400">
                        ${day.totalCost}
                    </span>
                </div>
            </div>

            {/* Activities */}
            <div className="space-y-7">
                <DaySection
                    icon={<Sun size={14} />}
                    title="Morning"
                    activities={day.morning}
                />

                <DaySection
                    icon={<Sunset size={14} />}
                    title="Afternoon"
                    activities={day.afternoon}
                />

                <DaySection
                    icon={<Moon size={14} />}
                    title="Evening"
                    activities={day.evening}
                />
            </div>
        </section>
    );
};

const TripPlan = () => {
    const { tripId } = useParams();

    return (
        <main className="min-h-screen bg-gray-800 px-6 py-20 text-white lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <header className="mb-10">
                    <p className="text-xs font-bold tracking-[0.3em] text-blue-500">
                        TRIP PLAN
                    </p>

                    <h1 className="mt-2 text-4xl font-black">JAPAN</h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                        Your complete day-by-day travel plan designed around
                        your destination, budget and travel preferences.
                    </p>

                    {/* Trip information */}
                    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                DURATION
                            </p>

                            <p className="mt-1 text-sm font-bold">12 Days</p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRAVELERS
                            </p>

                            <p className="mt-1 text-sm font-bold">2 People</p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                BUDGET
                            </p>

                            <p className="mt-1 text-sm font-bold">$1,500</p>
                        </div>

                        <div className="rounded-lg border border-gray-700 bg-[#111213] p-4">
                            <p className="text-[10px] font-bold text-gray-500">
                                TRIP ID
                            </p>

                            <p className="mt-1 text-sm font-bold text-blue-400">
                                {tripId}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Itinerary */}
                <div className="space-y-6">
                    {itinerary.map((day) => (
                        <DayCard key={day.day} day={day} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default TripPlan;

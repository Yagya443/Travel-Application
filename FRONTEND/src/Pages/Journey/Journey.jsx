import React from "react";
import { Globe2, MapPin } from "lucide-react";

const Journey = () => {
    const countries = [
        {
            name: "India",
            flag: "🇮🇳",
            places: "Mumbai, Goa, Manali",
        },
        {
            name: "France",
            flag: "🇫🇷",
            places: "Paris, Nice",
        },
        {
            name: "Japan",
            flag: "🇯🇵",
            places: "Tokyo, Kyoto",
        },
        {
            name: "Italy",
            flag: "🇮🇹",
            places: "Rome, Venice",
        },
        {
            name: "Switzerland",
            flag: "🇨🇭",
            places: "Zurich, Interlaken",
        },
        {
            name: "Australia",
            flag: "🇦🇺",
            places: "Sydney, Melbourne",
        },
        {
            name: "United States",
            flag: "🇺🇸",
            places: "New York, California",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="mb-2 flex items-center gap-2 text-blue-600">
                        <Globe2 size={20} />

                        <span className="text-sm font-semibold">
                            YOUR JOURNEY
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">
                        Places you've explored
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Keep track of the countries you've discovered.
                    </p>
                </div>

                {/* Main Card */}
                <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
                    {/* LEFT — IMAGE */}
                    <div className="relative min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
                            alt="Travel"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />

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
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">
                                    Countries
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Your travel history
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Globe2 size={18} />
                            </div>
                        </div>

                        {/* Country List */}
                        <div className="max-h-[420px] space-y-2 overflow-y-auto pr-2">
                            {countries.map((country, index) => (
                                <div
                                    key={country.name}
                                    className="group flex cursor-pointer items-center justify-between rounded-2xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-slate-50"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Number */}
                                        <span className="w-5 text-xs font-medium text-slate-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Flag */}
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                                            {country.flag}
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <h3 className="font-semibold text-slate-900">
                                                {country.name}
                                            </h3>

                                            <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import React from "react";
import { DateInput } from "../../Components/dateInput";
import { Counter } from "../../Components/Counter";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useGenerateTrip } from "../../Hooks/ai.hooks";
import { useState } from "react";

const PlannerForm = ({
    destination,
    setDestination,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    adults,
    children,
    setAdults,
    setChildren,
    minBudget,
    maxBudget,
    setMinBudget,
    setMaxBudget,
    selected,
}) => {
    const { mutate: generateTrip, isPending } = useGenerateTrip();
    const [recommendation, setRecommendation] = useState("");
    console.log(recommendation);

    const handleGenerateTrip = () => {
        const tripData = {
            destination,
            startDate,
            endDate,
            adults,
            children,
            minBudget,
            maxBudget,
            selected,
        };
        generateTrip(tripData, {
            onSuccess: (data) => {
                setRecommendation(data.recommendation);
            },

            onError: (error) => {
                console.log("AI Error:", error);
            },
        });
    };

    return (
        <section className="px-7 py-5">
            <div className="mb-4">
                <h1 className="text-[21px] font-black italic tracking-tight">
                    ROUTE <span className="text-blue-500">SYNTHESIS</span>
                </h1>
            </div>
            <div className="mb-5">
                <label className="mb-2 text-[12px] font-semibold tracking-[0.18em] text-gray-500">
                    TARGET SECTOR
                </label>

                <div className="relative">
                    <MapPin
                        size={13}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                        className="h-12 w-full rounded-md bg-[#111213] pl-9 pr-4 text-[16px] font-bold tracking-wide outline-none transition focus:border-blue-500/50"
                        value={destination}
                        placeholder="India, US"
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="relative">
                    <CalendarDays
                        size={12}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
                    />

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="h-10 w-full rounded-md border border-white/[0.07] bg-[#111213] px-3 pl-9 text-[9px] font-bold text-gray-300 outline-none focus:border-blue-500/50"
                    />
                </div>

                <div className="relative">
                    <CalendarDays
                        size={12}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
                    />

                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="h-10 w-full rounded-md border border-white/[0.07] bg-[#111213] px-3 pl-9 text-[9px] font-bold text-gray-300 outline-none focus:border-blue-500/50"
                    />
                </div>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="rounded-md border border-white/[0.07] bg-[#111213] px-4 py-1">
                    <p className="mb-1 text-center text-[8px] font-semibold tracking-[0.14em] text-gray-600">
                        Adults
                    </p>

                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => {
                                setAdults(Math.max(1, adults - 1));
                            }}
                            className="text-gray-500 transition hover:text-white"
                        >
                            <FaMinus size={11} />
                        </button>

                        <span className="text-[12px] font-bold">{adults}</span>

                        <button
                            onClick={() => {
                                setAdults(Math.max(1, adults + 1));
                            }}
                            className="text-gray-500 transition hover:text-white"
                        >
                            <FaPlus size={11} />
                        </button>
                    </div>
                </div>

                <div className="rounded-md border border-white/[0.07] bg-[#111213] px-4 py-1">
                    <p className="mb-1 text-center text-[8px] font-semibold tracking-[0.14em] text-gray-600">
                        Children
                    </p>

                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => {
                                setChildren(Math.max(0, children - 1));
                            }}
                            className="text-gray-500 transition hover:text-white"
                        >
                            <FaMinus size={11} />
                        </button>

                        <span className="text-[12px] font-bold">
                            {children}
                        </span>

                        <button
                            onClick={() => {
                                setChildren(children + 1);
                            }}
                            className="text-gray-500 transition hover:text-white"
                        >
                            <FaPlus size={11} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <label className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-gray-500">
                    INDIAN RUPPEES (INR)
                </label>

                <div className="grid h-11 grid-cols-2 overflow-hidden rounded-md bg-[#111213]">
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-[16px] text-bold text-white">
                            $
                        </span>

                        <input
                            type="number"
                            value={minBudget}
                            onChange={(e) => setMinBudget(e.target.value)}
                            className="w-full pl-6 text-center text-[12px] font-bold outline-none"
                        />
                    </div>

                    <div className="flex items-center">
                        <span className="text-white">→</span>
                        <input
                            type="number"
                            value={maxBudget}
                            onChange={(e) => setMaxBudget(e.target.value)}
                            className="w-full text-center text-[12px] font-bold text-blue-400 outline-none"
                        />
                    </div>
                </div>
            </div>
            <button
                className={`group flex h-10 w-full items-center justify-center gap-3 rounded-md bg-blue-600 text-[9px] font-black transition hover:bg-blue-500 ${isPending && "opacity-75"}`}
                onClick={handleGenerateTrip}
                disabled={isPending}
            >
                {isPending ? "GENERATING..." : "INITIALIZE GENERATION"}
                <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                />
            </button>
            {recommendation && (
                <section className="mt-8 space-y-6">
                    {/* Header */}
                    <div className="rounded-2xl border border-white/50 p-6">
                        <div className="flex items-center gap-3">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Your Travel Matches
                                </h2>
                                <p className="text-xs text-gray-400">
                                    Destinations selected based on your
                                    interests
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5">
                        {recommendation.recommended_destinations.map(
                            (destination, index) => (
                                <div
                                    key={destination.name}
                                    className="relative overflow-hidden rounded-2xl border  p-6 transition duration-300 hover:border-blue-500/95 hover:bg-gray-900/50"
                                >
                                    {/* Top section */}
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex gap-4 items-center">
                                            {/* Ranking */}
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-black text-blue-400">
                                                #{index + 1}
                                            </div>

                                            <h3 className="text-lg font-bold text-white">
                                                {destination.name}
                                            </h3>
                                        </div>
                                        {/* Match Score */}
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-blue-400">
                                                {destination.match_score}%
                                            </p>
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                                Match
                                            </p>
                                        </div>
                                    </div>
                                    {/* Match Progress */}
                                    <div className="mt-5">
                                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                            <div
                                                className="h-full rounded-full bg-blue-600 transition-all duration-700"
                                                style={{
                                                    width: `${destination.match_score}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Reason */}
                                    <div className="mt-5">
                                        <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                            Why it matches you
                                        </p>
                                        <p className="text-sm leading-6 text-gray-300">
                                            {destination.reason_for_match}
                                        </p>
                                    </div>
                                    {/* Activities */}
                                    <div className="mt-5">
                                        <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                            Things you can do
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {destination.main_activities.map(
                                                (activity) => (
                                                    <span
                                                        key={activity}
                                                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                                                    >
                                                        {activity}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    {/* Buttons */}
                                    <button className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500">
                                        Plan This Trip →
                                    </button>
                                </div>
                            ),
                        )}
                    </div>
                    {/* Travel Tips */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10">
                                💡
                            </div>
                            <div>
                                <h3 className="font-bold text-white">
                                    Travel Tips
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Things to keep in mind
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 space-y-3">
                            {recommendation.travel_tips.map((tip, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                                >
                                    <span className="text-sm text-blue-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm leading-6 text-gray-400">
                                        {tip}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </section>
    );
};

export default PlannerForm;

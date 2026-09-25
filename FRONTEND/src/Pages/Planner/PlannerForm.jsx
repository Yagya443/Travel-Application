import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
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
    setRecommendation
}) => {
    const { mutate, isPending } = useGenerateTrip();

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
        mutate(tripData, {
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
                className={`group flex h-10 w-full items-center justify-center gap-3 rounded-md bg-blue-600 text-[12px] font-black transition hover:bg-blue-500 ${isPending && "opacity-75"}`}
                onClick={handleGenerateTrip}
                disabled={isPending}
            >
                {isPending ? "GENERATING..." : "INITIALIZE GENERATION"}
                {!isPending && (
                    <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                    />
                )}
            </button>
           
        </section>
    );
};

export default PlannerForm;

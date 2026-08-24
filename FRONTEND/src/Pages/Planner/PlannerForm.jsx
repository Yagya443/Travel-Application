import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import { DateInput } from "../../Components/dateInput";
import { Counter } from "../../Components/Counter";

const PlannerForm = ({
    destination,
    setDestination,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    adults,
    children,
    increaseAdults,
    decreaseAdults,
    increaseChildren,
    decreaseChildren,
    minBudget,
    maxBudget,
    setMinBudget,
    setMaxBudget,
    generateRoute,
}) => {
    return (
        <section className="px-7 py-5">
            <div className="mb-4">

                <h1 className="text-[21px] font-black italic tracking-tight">
                    ROUTE <span className="text-blue-500">SYNTHESIS</span>
                </h1>
            </div>

            {/* Destination */}
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
                        placeholder="Paris, France"
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
                <DateInput value={startDate} onChange={setStartDate} />
                <DateInput value={endDate} onChange={setEndDate} />
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3">
                <Counter
                    label="ADULT UNITS"
                    value={adults}
                    decrease={decreaseAdults}
                    increase={increaseAdults}
                />

                <Counter
                    label="CHILD UNITS"
                    value={children}
                    decrease={decreaseChildren}
                    increase={increaseChildren}
                />
            </div>

            <div className="mb-8">
                <label className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-gray-500">
                    FISCAL RANGE (USD)
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

            {/* Generate button */}
            <button
                className="group flex h-10 w-full items-center justify-center gap-3 rounded-md bg-blue-600 text-[9px] font-black tracking-[0.12em] transition hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] active:scale-[0.99]"
                onClick={() => {
                    console.log({
                        destination,
                        startDate,
                        endDate,
                        adults,
                        children,
                        minBudget,
                        maxBudget,
                        selected,
                    });
                }}
            >
                INITIALIZE GENERATION
                <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                />
            </button>
        </section>
    );
};

export default PlannerForm;

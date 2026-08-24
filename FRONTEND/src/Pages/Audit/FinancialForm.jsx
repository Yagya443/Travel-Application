import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { GoPerson } from "react-icons/go";

const FinancialForm = ({
    destination,
    setDestination,
    duration,
    setDuration,
    unitCount,
    setUnitCount,
}) => {

    console.log(duration,unitCount);
    

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

            <div className="mb-6 grid grid-cols-2 gap-3">
                <div>
                    <label className="mb-2 text-[12px] font-semibold tracking-[0.18em] text-gray-500">
                        CYCLE DURATION
                    </label>

                    <div className="relative">
                        <Calendar
                            size={13}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                        />
                        <input
                            className="h-12 w-full rounded-md bg-[#111213] pl-9 pr-4 text-[16px] font-bold tracking-wide outline-none transition focus:border-blue-500/50"
                            type="number"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="mb-2 text-[12px] font-semibold tracking-[0.18em] text-gray-500">
                        UNIT COUNT
                    </label>

                    <div className="relative">
                        <GoPerson
                            size={13}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                        />
                        <input
                            className="h-12 w-full rounded-md bg-[#111213] pl-9 pr-4 text-[16px] font-bold tracking-wide outline-none transition focus:border-blue-500/50"
                            type="number"
                            value={unitCount}
                            onChange={(e) => setUnitCount(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <label className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-gray-500">
                    OPERATIONAL TIER
                </label>

                <select className="rounded-lg w-full border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-blue-400 font-semibold">
                    <option>Budget</option>
                    <option>Standard</option>
                    <option>Premium</option>
                </select>
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

export default FinancialForm;

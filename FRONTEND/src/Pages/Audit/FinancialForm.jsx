import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { GoPerson } from "react-icons/go";
import { useGenerateAudit } from "../../Hooks/ai.hooks";
import { useState } from "react";

const FinancialForm = ({
    destination,
    setDestination,
    duration,
    setDuration,
    unitCount,
    setUnitCount,
    setOperationalTier,
    operationalTier,
}) => {
    const [result, setResult] = useState("");
    const { mutate, isPending } = useGenerateAudit("");

    const handleAuditTrip = () => {
        const auditData = {
            destination,
            duration,
            unitCount,
            operationalTier,
        };

        mutate(auditData, {
            onSuccess: (data) => {
                setResult(data);
            },

            onError: (error) => {
                console.log("AI Error:", error);
            },
        });
    };

    return (
        <section className="px-7 py-5 ">
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
                <label
                    onChange={(e) => setOperationalTier(e.target.value)}
                    value={operationalTier}
                    className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-gray-500"
                >
                    OPERATIONAL TIER
                </label>

                <select className="rounded-lg w-full border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-blue-400 font-semibold">
                    <option value="Budget">Budget</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                </select>
            </div>

            <button
                className={`flex h-10 w-full items-center justify-center gap-3 rounded-md bg-blue-600 text-[12px] font-black transition hover:bg-blue-500 ${isPending && "opacity-65"}`}
                onClick={handleAuditTrip}
                disabled={isPending}
            >
                {!isPending ? "INITIALIZE GENERATION" : "Loading..."}
                {!isPending && (
                    <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                    />
                )}
            </button>

            {result?.result && (
                <section className="mt-8 space-y-5">
                    {/* Overall Score */}
                    <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                    AUDIT SCORE
                                </p>

                                <h2 className="mt-2 text-3xl font-black text-white">
                                    {result.recommendation.overall_score}
                                    <span className="text-sm text-gray-500">
                                        /100
                                    </span>
                                </h2>

                                <p className="mt-1 text-sm font-semibold text-blue-400">
                                    {result.recommendation.verdict}
                                </p>
                            </div>

                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-500">
                                <span className="text-sm font-black text-white">
                                    {result.recommendation.overall_score}%
                                </span>
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-6 text-gray-400">
                            {result.recommendation.summary}
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                DAILY BURN
                            </p>

                            <p className="mt-2 text-xl font-black text-white">
                                ${result.recommendation.key_metrics.daily_burn}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                TOTAL COST
                            </p>

                            <p className="mt-2 text-xl font-black text-white">
                                ${result.recommendation.key_metrics.total_cost}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                SAFETY BUFFER
                            </p>

                            <p className="mt-2 text-xl font-black text-blue-400">
                                {
                                    result.recommendation.key_metrics
                                        .safety_buffer
                                }
                                %
                            </p>
                        </div>
                    </div>

                    {/* Expense Breakdown */}
                    <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                        <div className="mb-5">
                            <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                FINANCIAL DISTRIBUTION
                            </p>

                            <h2 className="mt-1 text-lg font-black text-white">
                                Expense Breakdown
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {result.recommendation.expense_breakdown?.map(
                                (expense) => {
                                    const total =
                                        result.recommendation.key_metrics
                                            .total_cost;

                                    const percentage =
                                        total > 0
                                            ? (expense.amount / total) * 100
                                            : 0;

                                    return (
                                        <div key={expense.category}>
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="text-xs font-semibold text-gray-300">
                                                    {expense.category}
                                                </span>

                                                <span className="text-xs font-bold text-white">
                                                    ${expense.amount}
                                                </span>
                                            </div>

                                            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                                                <div
                                                    className="h-full rounded-full bg-blue-500 transition-all"
                                                    style={{
                                                        width: `${Math.min(
                                                            percentage,
                                                            100,
                                                        )}%`,
                                                    }}
                                                />
                                            </div>

                                            <p className="mt-1 text-right text-[9px] text-gray-600">
                                                {percentage.toFixed(1)}%
                                            </p>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    {/* Duration Analysis */}
                    <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                        <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                            DURATION ANALYSIS
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-[#151617] p-4">
                                <p className="text-[8px] tracking-widest text-gray-500">
                                    PLANNED
                                </p>

                                <p className="mt-2 text-xl font-black text-white">
                                    {
                                        result.recommendation.duration_analysis
                                            .planned_duration
                                    }
                                    <span className="ml-1 text-xs text-gray-500">
                                        days
                                    </span>
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#151617] p-4">
                                <p className="text-[8px] tracking-widest text-gray-500">
                                    RECOMMENDED
                                </p>

                                <p className="mt-2 text-xl font-black text-blue-400">
                                    {
                                        result.recommendation.duration_analysis
                                            .recommended_duration
                                    }
                                    <span className="ml-1 text-xs text-gray-500">
                                        days
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[9px] font-bold text-blue-400">
                                {result.recommendation.duration_analysis.status}
                            </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-gray-400">
                            {result.recommendation.duration_analysis.analysis}
                        </p>
                    </div>

                    {/* Issues */}
                    {result.recommendation.issues?.length > 0 && (
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                            <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                DETECTED ISSUES
                            </p>

                            <div className="mt-4 space-y-3">
                                {result.recommendation.issues.map(
                                    (issue, index) => (
                                        <div
                                            key={index}
                                            className="rounded-lg border border-red-500/10 bg-red-500/5 p-3"
                                        >
                                            <p className="text-xs leading-5 text-gray-300">
                                                {issue}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    )}

                    {/* Suggestions */}
                    {result.recommendation.suggestions?.length > 0 && (
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                            <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                OPTIMIZATION SUGGESTIONS
                            </p>

                            <div className="mt-4 space-y-3">
                                {result.recommendation.suggestions.map(
                                    (suggestion, index) => (
                                        <div key={index} className="flex gap-3">
                                            <span className="text-xs font-black text-blue-500">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            <p className="text-xs leading-5 text-gray-400">
                                                {suggestion}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    )}

                    {/* Travel Tips */}
                    {result.recommendation.travel_tips?.length > 0 && (
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                            <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                AI TRAVEL INTELLIGENCE
                            </p>

                            <div className="mt-4 space-y-3">
                                {result.recommendation.travel_tips.map(
                                    (tip, index) => (
                                        <div key={index} className="flex gap-3">
                                            <span className="text-[10px] font-black text-blue-500">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>

                                            <p className="text-xs leading-5 text-gray-400">
                                                {tip}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    )}
                </section>
            )}
        </section>
    );
};

export default FinancialForm;

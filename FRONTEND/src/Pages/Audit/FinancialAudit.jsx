import { CiGlobe } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useTripPlan } from "../../Hooks/ai.hooks";
const FinancialAudit = ({
    result,
    destination,
    duration,
    unitCount,
    operationalTier,
}) => {
    const navigate = useNavigate();
    const { mutate, isPending } = useTripPlan();
    const expenseData =
        result?.result?.expense_breakdown?.map((expense) => ({
            name: expense.category,
            value: expense.amount,
        })) || [];
    const handlePlanTrip = () => {
        const tripId = Math.floor(100000 + Math.random() * 900000);
        const tripData = {
            destination,
            duration,
            unitCount,
            operationalTier,
            audit: result,
        };
        mutate(tripData, {
            onSuccess: (data) => {
                console.log("Trip Plan AI Response:", data);
                navigate(`/tripplan/${tripId}`, {
                    state: { tripPlan: data, tripId },
                });
            },
            onError: (error) => {
                console.log("Trip Plan AI Error:", error);
            },
        });
    };
    return (
        <>
            {result?.result && (
                <>
                    {/* KEY METRICS */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <CiGlobe size={25} fill="blue" />
                            <div>
                                <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                    DAILY BURN
                                </p>
                                <p className="mt-2 text-xl font-black text-white">
                                    ${result.result.key_metrics.daily_burn}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <IoIosFlash size={25} fill="orange" />
                            <div>
                                <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                    TOTAL COST
                                </p>
                                <p className="mt-2 text-xl font-black text-white">
                                    ${result.result.key_metrics.total_cost}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#0d0e0f] p-4">
                            <AiFillSafetyCertificate size={25} fill="green" />
                            <div>
                                <p className="text-[8px] font-bold tracking-widest text-gray-500">
                                    SAFETY BUFFER
                                </p>
                                <p className="mt-2 text-xl font-black">
                                    {result.result.key_metrics.safety_buffer}%
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* EXPENSE SECTION */}
                    <div className="mt-8 grid min-h-100 grid-cols-2 gap-4">
                        {/* PIE CHART */}
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                            <div className="mb-5">
                                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                    FINANCIAL DISTRIBUTION
                                </p>
                                <h2 className="mt-1 text-lg font-black text-white">
                                    Expense Breakdown
                                </h2>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <div className="h-64 w-64">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <PieChart>
                                            <Pie
                                                data={expenseData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                paddingAngle={7}
                                                fill="white"
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: "#0d0e0f",
                                                    border: "1px solid #374151",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {expenseData.map((expense) => (
                                        <div
                                            key={expense.name}
                                            className="flex items-center justify-between gap-2 rounded-lg px-2 py-1"
                                        >
                                            <span className="text-xs font-semibold text-gray-200">
                                                {expense.name}
                                            </span>
                                            <p className="text-xs font-bold text-white">
                                                ${expense.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* PROGRESS BARS */}
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
                                {result.result.expense_breakdown?.map(
                                    (expense) => {
                                        const total =
                                            result.result.key_metrics
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
                                                            width: `${Math.min(percentage, 100)}%`,
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
                    </div>
                    {/* AUDIT SCORE */}
                    <section className="mt-8 space-y-5">
                        <div className="rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                            <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                AUDIT SCORE
                            </p>
                            <h2 className="mt-2 text-3xl font-black text-white">
                                {result.result.overall_score}
                                <span className="text-sm text-gray-500">
                                    /100
                                </span>
                            </h2>
                            <p className="mt-1 text-sm font-semibold text-blue-400">
                                {result.result.verdict}
                            </p>
                            <p className="mt-5 text-justify text-sm leading-6 text-gray-400">
                                {result.result.summary}
                            </p>
                        </div>
                        {/* DURATION ANALYSIS */}
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
                                            result.result.duration_analysis
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
                                            result.result.duration_analysis
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
                                    {result.result.duration_analysis.status}
                                </span>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-400">
                                {result.result.duration_analysis.analysis}
                            </p>
                        </div>
                        {/* SUGGESTIONS + TIPS */}
                        <div className="flex gap-3">
                            {result.result.suggestions?.length > 0 && (
                                <div className="flex-1 rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                                    <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                        OPTIMIZATION SUGGESTIONS
                                    </p>
                                    <div className="mt-4 space-y-3 text-justify">
                                        {result.result.suggestions.map(
                                            (suggestion, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2"
                                                >
                                                    <span className="text-xs font-black text-blue-500">
                                                        {String(
                                                            index + 1,
                                                        ).padStart(2, "0")}
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
                            {result.result.travel_tips?.length > 0 && (
                                <div className="flex-1 rounded-xl border border-gray-800 bg-[#0d0e0f] p-5">
                                    <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500">
                                        AI TRAVEL INTELLIGENCE
                                    </p>
                                    <div className="mt-4 space-y-3 text-justify">
                                        {result.result.travel_tips.map(
                                            (tip, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                >
                                                    <span className="text-[10px] font-black text-blue-500">
                                                        {String(
                                                            index + 1,
                                                        ).padStart(2, "0")}
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
                        </div>
                        {/* PLAN BUTTON */}
                        <div className="flex justify-end">
                            <button
                                onClick={handlePlanTrip}
                                disabled={isPending}
                                className={`mt-3 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-500 ${isPending ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                            >
                                {isPending
                                    ? "Generating Trip Plan..."
                                    : "Plan This Trip →"}
                            </button>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};
export default FinancialAudit;

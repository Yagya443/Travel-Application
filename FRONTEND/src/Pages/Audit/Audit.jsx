import FinancialAudit from "./FinancialAudit";
import FinancialForm from "./FinancialForm";
import useRoutePlanner from "../../Hooks/Planner.hooks";

const Audit = () => {
    const planner = useRoutePlanner();

    return (
        <main className="min-h-screen bg-gray-800 text-white overflow-hidden pt-18">
            <div className="grid grid-cols-[450px_1fr]">
                <FinancialForm destination={planner.destination}
                    setDestination={planner.setDestination}
                    duration={planner.duration}
                    setDuration={planner.setDuration}
                    unitCount={planner.unitCount}
                    setUnitCount={planner.setUnitCount}
                />

                <section className="px-8 py-6 lg:px-14">
                    <FinancialAudit />
                </section>
            </div>
        </main>
    );
};

export default Audit;

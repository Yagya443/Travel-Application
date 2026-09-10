import { useState } from "react";
import FinancialAudit from "./FinancialAudit";
import FinancialForm from "./FinancialForm";
// import useRoutePlanner from "../../Hooks/Planner.hooks";

const Audit = () => {
    // const planner = useRoutePlanner();

    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState(null);
    const [unitCount, setUnitCount] = useState(null);
        
    // const [startDate, setStartDate] = useState("");
    //     const [endDate, setEndDate] = useState("");
    //     const [adults, setAdults] = useState(1);
    //     const [children, setChildren] = useState(0);
    //     const [minBudget, setMinBudget] = useState(0);
    //     const [maxBudget, setMaxBudget] = useState(0);
    //     const [selected, setSelected] = useState([]);

    return (
        <main className="min-h-screen bg-gray-800 text-white overflow-hidden pt-18">
            <div className="grid grid-cols-[450px_1fr]">
                <FinancialForm destination={destination}
                    setDestination={setDestination}
                    duration={duration}
                    setDuration={setDuration}
                    unitCount={unitCount}
                    setUnitCount={setUnitCount}
                />

                <section className="px-8 py-6 lg:px-14 border-2 rounded-2xl mr-4 mt-8">
                    <FinancialAudit />
                </section>
            </div>
        </main>
    );
};

export default Audit;

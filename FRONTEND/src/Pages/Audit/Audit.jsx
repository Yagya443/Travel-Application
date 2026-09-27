import { useState } from "react";
import FinancialAudit from "./FinancialAudit";
import FinancialForm from "./FinancialForm";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useTripPlan } from "../../Hooks/ai.hooks";

const Audit = () => {
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState(null);
    const [unitCount, setUnitCount] = useState(null);
    const [operationalTier, setOperationalTier] = useState("Budget");

    const { data: result } = useQuery({
        queryKey: ["audit"],
        queryFn: () => null,
        enabled: false,
    });

    return (
        <main className="min-h-screen bg-gray-800 text-white overflow-hidden pt-18 px-16">
            <div className="grid grid-cols-[450px_1fr] gap-12">
                <FinancialForm
                    destination={destination}
                    setDestination={setDestination}
                    duration={duration}
                    setDuration={setDuration}
                    unitCount={unitCount}
                    setUnitCount={setUnitCount}
                    operationalTier={operationalTier}
                    setOperationalTier={setOperationalTier}
                />
                <div className="relative px-8 py-6 rounded-2xl lg:px-14 mt-8 border-2">
                    {result ? (
                        <section className=" rounded-2xl  relative">
                            <FinancialAudit
                                result={result}
                                destination={destination}
                                duration={duration}
                                unitCount={unitCount}
                                operationalTier={operationalTier}
                            />
                        </section>
                    ) : (
                        <div className="absolute left-1/2 top-1/2 -translate-1/2 font-mono text-2xl">
                            Awaiting Parameters
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Audit;

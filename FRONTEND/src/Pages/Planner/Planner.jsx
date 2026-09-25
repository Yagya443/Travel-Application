import React, { useState } from "react";
import { MapPin, CalendarDays, Minus, Plus } from "lucide-react";
import PlannerForm from "./PlannerForm";
import useRoutePlanner from "../../Hooks/Planner.hooks";
import ExperienceSection from "./ExperienceSection";
import MissionPreview from "./MissionPreview";
import AiRecommendation from "./AiRecommendation";

const RouteSynthesis = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);
    const [selected, setSelected] = useState([]);
    const [destination, setDestination] = useState("");

    const toggleExperience = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((expId) => expId !== id)
                : [...prev, id],
        );
    };

    const [recommendation, setRecommendation] = useState("");

    return (
        <main className="min-h-screen bg-gray-800 text-white overflow-hidden pt-18">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] grid-cols-1 px-8 py-6 lg:px-14">
                <section className="">
                    <ExperienceSection
                        selected={selected}
                        toggleExperience={toggleExperience}
                    />

                    <MissionPreview
                        destination={destination}
                        adults={adults}
                        children={children}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </section>

                <PlannerForm
                    destination={destination}
                    setDestination={setDestination}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    adults={adults}
                    setAdults={setAdults}
                    setChildren={setChildren}
                    children={children}
                    minBudget={minBudget}
                    maxBudget={maxBudget}
                    setMinBudget={setMinBudget}
                    setMaxBudget={setMaxBudget}
                    selected={selected}
                    setRecommendation={setRecommendation}
                />

                {/* {recommendation && ( */}
                    <AiRecommendation recommendation={recommendation} />
                {/* )} */}
            </div>
        </main>
    );
};

export default RouteSynthesis;

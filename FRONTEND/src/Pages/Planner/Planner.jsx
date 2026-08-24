import React, { useState } from "react";
import { MapPin, CalendarDays, Minus, Plus } from "lucide-react";
import PlannerForm from "./PlannerForm";
import useRoutePlanner from "../../Hooks/Planner.hooks";
import ExperienceSection from "./ExperienceSection";
import MissionPreview from "./MissionPreview";

const RouteSynthesis = () => {
    const planner = useRoutePlanner();

    return (
        <main className="min-h-screen bg-gray-800 text-white overflow-hidden pt-18">
            <div className="grid grid-cols-[950px_1fr]">
                <section className="px-8 py-6 lg:px-14">
                    <ExperienceSection
                        selected={planner.selected}
                        toggleExperience={planner.toggleExperience}
                    />

                    <MissionPreview
                        destination={planner.destination}
                        adults={planner.adults}
                        children={planner.children}
                        startDate={planner.startDate}
                        endDate={planner.endDate}
                    />
                </section>

                <PlannerForm
                    destination={planner.destination}
                    setDestination={planner.setDestination}
                    startDate={planner.startDate}
                    setStartDate={planner.setStartDate}
                    endDate={planner.endDate}
                    setEndDate={planner.setEndDate}
                    adults={planner.adults}
                    children={planner.children}
                    increaseAdults={planner.increaseAdults}
                    decreaseAdults={planner.decreaseAdults}
                    increaseChildren={planner.increaseChildren}
                    decreaseChildren={planner.decreaseChildren}
                    minBudget={planner.minBudget}
                    maxBudget={planner.maxBudget}
                    setMinBudget={planner.setMinBudget}
                    setMaxBudget={planner.setMaxBudget}
                    generateRoute={planner.generateRoute}
                />
            </div>
        </main>
    );
};

export default RouteSynthesis;

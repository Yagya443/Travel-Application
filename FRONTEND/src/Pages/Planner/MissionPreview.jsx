import React from "react";
import { PreviewItem } from "../../Components/previewItem";
import { calculateDuration } from "../../Data/calculateDuration";

const MissionPreview = ({
    destination,
    adults,
    children,
    startDate,
    endDate,
}) => {
    return (
        <>
            <div className="mt-8">
                <div className="mb-3 text-[8px] font-bold tracking-[0.15em] text-gray-500">
                    MISSION LIVE PREVIEW
                </div>

                <div className="relative min-h-34.5 overflow-hidden rounded-xl border border-white">
                    <div className="relative grid h-full grid-cols-3 px-7 py-10">
                        <PreviewItem
                            label="LOCATION"
                            value={destination || "Location Not Set"}
                        />

                        <PreviewItem
                            label="TRAVELERS"
                            value={`${adults} Adults & ${children} Children`}
                        />

                        <PreviewItem
                            label="DURATION"
                            value={calculateDuration(startDate, endDate)}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-[7px] font-semibold tracking-[0.15em] text-gray-700">
                <span>ROUTE SYNTHESIS / AUTOMATED PLANNING SYSTEM</span>
            </div>
        </>
    );
};

export default MissionPreview;

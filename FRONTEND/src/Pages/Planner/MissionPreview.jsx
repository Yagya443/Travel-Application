import React from "react";
import { PreviewItem } from "../../Components/previewItem";
import { calculateDuration } from "../../Data/calculateDuration";

const MissionPreview = ({ destination, adults, startDate, endDate }) => {
    return (
        <>
            <div className="mt-8">
                <div className="mb-3 text-[8px] font-bold tracking-[0.15em] text-gray-500">
                    MISSION LIVE PREVIEW
                </div>

                <div className="relative min-h-[138px] overflow-hidden rounded-[12px] border border-white/[0.04] bg-[#030404]">
                    {/* Background grid */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "35px 35px",
                        }}
                    />

                    <div className="relative grid h-full grid-cols-3 px-7 py-10">
                        {/* Location */}
                        <PreviewItem
                            label="LOCATION"
                            value={destination}
                            sub="DEPARTMENT SECTOR"
                        />

                        {/* Personnel */}
                        <PreviewItem
                            label="PERSONNEL"
                            value={`${adults} UNITS`}
                            sub="ACTIVE DEPLOYMENT"
                        />

                        {/* Duration */}
                        <PreviewItem
                            label="DURATION"
                            value={calculateDuration(startDate, endDate)}
                            sub="TEMPORAL CYCLE"
                        />
                    </div>

                    {/* Decorative circle */}
                    <div className="absolute right-8 top-1/2 hidden h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white/[0.025] md:flex">
                        <div className="h-12 w-12 rounded-full border border-white/[0.025]" />
                    </div>
                </div>
            </div>

            {/* Bottom info */}
            <div className="mt-6 flex items-center justify-between text-[7px] font-semibold tracking-[0.15em] text-gray-700">
                <span>ROUTE SYNTHESIS / AUTOMATED PLANNING SYSTEM</span>

                <span>SYSTEM READY</span>
            </div>
        </>
    );
};

export default MissionPreview;

import React from "react";
import { experiences } from "../../Data/experiences";
import { Layers3 } from "lucide-react";

const ExperienceSection = ({ selected, toggleExperience }) => {
    return (
        <>
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Layers3 size={15} className="text-blue-500" />

                    <span className="text-[9px] font-bold tracking-[0.3em] text-gray-500">
                        EXPERIENCE LAYERS
                    </span>
                </div>

                <span className="text-[8px] font-bold tracking-[0.15em] text-blue-500">
                    {selected.length} SELECTED
                </span>
            </div>

            {/* Experience cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {experiences.map((experience) => {
                    const Icon = experience.icon;
                    const isSelected = selected.includes(experience.id);

                    return (
                        <button
                            key={experience.id}
                            onClick={() => toggleExperience(experience.id)}
                            className={`
                      group relative flex h-[58px] items-center gap-4 rounded-[22px] border px-5 text-left transition-all duration-200
                      ${
                          isSelected
                              ? "border-blue-500/40 bg-[#020b1c] shadow-[0_0_20px_rgba(37,99,235,0.04)]"
                              : "border-white/[0.07] bg-[#03070c] opacity-60"
                      }
                      hover:border-blue-500/50
                    `}
                        >
                            {/* Icon */}
                            <div
                                className={`
                        flex h-7 w-7 items-center justify-center rounded-lg
                        ${isSelected ? "text-blue-400" : "text-gray-500"}
                      `}
                            >
                                <Icon size={19} strokeWidth={1.5} />
                            </div>
                            {/* Text */}
                            <div>
                                <p className="text-[9px] font-black tracking-wide text-gray-300">
                                    {experience.title}
                                </p>

                                <p className="mt-0.5 text-[6px] font-semibold tracking-[0.14em] text-gray-600">
                                    {experience.subtitle}
                                </p>
                            </div>
                            {/* Selection indicator */}
                            <span
                                className={`
                        absolute right-3 top-3 h-1.5 w-1.5 rounded-full
                        ${
                            isSelected
                                ? "bg-blue-500 shadow-[0_0_8px_#2563eb]"
                                : "bg-gray-700"
                        }
                      `}
                            />
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default ExperienceSection;

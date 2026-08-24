import React from "react";
import { experiences } from "../../Data/experiences";
import { LuLayers } from "react-icons/lu";

const ExperienceSection = ({ selected, toggleExperience }) => {

    console.log(selected);
    console.log(experiences);
    

    return (
        <>
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <LuLayers size={15} className="text-blue-500" />
                    <span className="text-[9px] font-bold tracking-[0.3em] text-gray-500">
                        EXPERIENCE LAYERS
                    </span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-blue-500">
                    {selected.length} SELECTED
                </span>
            </div>

            {/* Experience cards */}
            <div className="grid gap-3 grid-cols-3">
                {experiences.map((experience) => {
                    const Icon = experience.icon;

                    return (
                        <button
                            key={experience.id}
                            onClick={() => toggleExperience(experience.id)}
                            className={`
                                    cursor-pointer relative flex h-[58px] items-center gap-4 rounded-[12px] border-2 px-5 text-left transition-all duration-200
                                    ${selected.includes(experience.id) && "border-2 border-blue-400"}
                                    hover:opacity-70
                            `}
                        >
                            <div
                                className={`
                                        flex h-7 w-7 items-center justify-center rounded-lg
                                    `}
                            >
                                <Icon size={19} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black tracking-wide text-gray-300">
                                    {experience.title}
                                </p>

                                <p className="mt-0.5 text-[6px] font-semibold tracking-[0.14em] text-gray-600">
                                    {experience.subtitle}
                                </p>
                            </div>
                            <span
                                className={`
                                    absolute right-3 top-3 h-1.5 w-1.5 rounded-full
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

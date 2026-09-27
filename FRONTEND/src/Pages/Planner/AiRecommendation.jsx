import React from "react";

const AiRecommendation = ({ recommendation }) => {

    return (
        <>
            <section className="mt-8 space-y-6">
                <div className="rounded-2xl border-2 p-6">
                    <div className="flex items-center gap-3">
                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Your Travel Matches
                            </h2>
                            <p className="text-xs text-gray-400">
                                Destinations selected based on your interests
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    {recommendation?.recommended_destinations?.map(
                        (destination, index) => (
                            <div
                                key={destination.name}
                                className="relative overflow-hidden rounded-2xl border  p-6 transition duration-300 hover:border-blue-500/95 hover:bg-gray-900/50"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4 items-center">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-black text-blue-400">
                                            #{index + 1}
                                        </div>

                                        <h3 className="text-lg font-bold text-white">
                                            {destination.name}
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-blue-400">
                                            {destination.match_score}%
                                        </p>
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                            Match
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-blue-600 transition-all duration-700"
                                            style={{
                                                width: `${destination.match_score}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                        Why it matches you
                                    </p>
                                    <p className="text-sm leading-6 text-gray-300">
                                        {destination.reason_for_match}
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                        Things you can do
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {destination.main_activities.map(
                                            (activity) => (
                                                <span
                                                    key={activity}
                                                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                                                >
                                                    {activity}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                                
                            </div>
                        ),
                    )}
                </div>
                <div className="rounded-2xl border-2 border-white/40 p-6">
                    <div className="flex items-center gap-3">
                        <div>
                            <h3 className="font-bold text-white">
                                Travel Tips
                            </h3>
                            <p className="text-xs text-gray-500">
                                Things to keep in mind
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 space-y-3">
                        {recommendation.travel_tips?.map((tip, index) => (
                            <div
                                key={index}
                                className="flex gap-3 rounded-xl items-center border border-white/5 bg-white/[0.02] p-4"
                            >
                                <span className="text-sm text-blue-400 ">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-sm leading-6 text-gray-400 border-l-2 pl-4 text-justify">
                                    {tip}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AiRecommendation;

import Activity from "./Activity";

const DaySection = ({ icon, title, activities }) => {
    if (!activities?.length) return null;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                {icon}
                {title}
            </div>

            <div className="space-y-2">
                {activities.map((activity, index) => {
                    if (typeof activity === "string") {
                        return (
                            <div
                                key={index}
                                className="rounded-lg border border-gray-800 bg-[#111213] p-4"
                            >
                                <p className="text-sm text-gray-300">
                                    {activity}
                                </p>
                            </div>
                        );
                    }

                    return (
                        <Activity
                            key={`${activity?.activity || activity?.name || "activity"}-${index}`}
                            activity={activity}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DaySection;

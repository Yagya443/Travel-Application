const Activity = ({ activity }) => {
    return (
        <div className="flex items-start justify-between rounded-lg border border-gray-800 bg-[#111213] p-4">
            <div>
                <h4 className="text-sm font-semibold text-white">
                    {activity?.activity || activity?.name || "Activity"}
                </h4>

                {activity?.location && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={12} />
                        {activity.location}
                    </div>
                )}
            </div>

            {activity?.cost !== undefined && (
                <span className="ml-4 text-xs font-bold text-blue-400">
                    ₹{activity.cost}
                </span>
            )}
        </div>
    );
};

export default Activity;

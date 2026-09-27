import { CalendarDays, MapPin, Sun, Sunset, Moon, Wallet } from "lucide-react";
import DaySection from "./DaySection";

const DayCard = ({ day }) => {
    return (
        <section className="rounded-2xl border border-gray-700 bg-[#0d0e0f] p-6">
            <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-black tracking-[0.2em] text-blue-500">
                        DAY {day?.day}
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                        {day?.title}
                    </h2>

                    {day?.date && (
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                            <CalendarDays size={13} />
                            {day.date}
                        </div>
                    )}
                </div>

                {day?.totalCost !== undefined && (
                    <div className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-2">
                        <Wallet size={14} className="text-blue-400" />

                        <span className="text-xs font-bold text-blue-400">
                            ₹{day.totalCost}
                        </span>
                    </div>
                )}
            </div>

            <div className="space-y-7">
                <DaySection
                    icon={<Sun size={14} />}
                    title="Morning"
                    activities={day?.morning}
                />

                <DaySection
                    icon={<Sunset size={14} />}
                    title="Afternoon"
                    activities={day?.afternoon}
                />

                <DaySection
                    icon={<Moon size={14} />}
                    title="Evening"
                    activities={day?.evening}
                />
            </div>
        </section>
    );
};

export default DayCard;

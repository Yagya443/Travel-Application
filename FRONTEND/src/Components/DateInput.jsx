import { CalendarDays } from "lucide-react";

export const DateInput = ({ value, onChange }) => {
    return (
        <div className="relative">
            <CalendarDays
                size={12}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-blue-500"
            />

            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="h-10 w-full rounded-md border border-white/[0.07] bg-[#111213] px-3 pl-9 text-[9px] font-bold text-gray-300 outline-none focus:border-blue-500/50"
            />
        </div>
    );
};
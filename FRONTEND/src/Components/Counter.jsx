
import { FaPlus,FaMinus } from "react-icons/fa";

export const Counter = ({ label, value, decrease, increase }) => {
    return (
        <div className="rounded-md border border-white/[0.07] bg-[#111213] px-4 py-1">
            <p className="mb-1 text-center text-[8px] font-semibold tracking-[0.14em] text-gray-600">
                {label}
            </p>

            <div className="flex items-center justify-between">
                <button
                    onClick={decrease}
                    className="text-gray-500 transition hover:text-white"
                >
                    <FaMinus size={11} />
                </button>

                <span className="text-[12px] font-bold">{value}</span>

                <button
                    onClick={increase}
                    className="text-gray-500 transition hover:text-white"
                >
                    <FaPlus size={11} />
                </button>
            </div>
        </div>
    );
};

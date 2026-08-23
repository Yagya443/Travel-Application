export const PreviewItem = ({ label, value, sub }) => {
    return (
        <div>
            <p className="mb-2 text-[7px] font-bold tracking-[0.16em] text-gray-600">
                {label}
            </p>

            <p className="max-w-[180px] truncate text-[13px] font-black tracking-wide text-gray-200">
                {value}
            </p>

            <p className="mt-1 text-[6px] font-semibold tracking-[0.12em] text-gray-700">
                {sub}
            </p>
        </div>
    );
};
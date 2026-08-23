export const calculateDuration = (start, end) => {
    if (!start || !end) return "CALCULATED";

    const startDate = new Date(start);
    const endDate = new Date(end);

    const difference = endDate.getTime() - startDate.getTime();

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (days <= 0) return "INVALID";

    return `${days} DAYS`;
};
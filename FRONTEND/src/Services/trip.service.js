export const createTrip = async (tripData) => {
    const response = await axios.post(
        import.meta.env.VITE_RENDER_URL,
        tripData,
    );
    return response.data;
};

export const getTrip = async (tripData) => {
    const response = await axios.get(
        import.meta.env.VITE_RENDER_URL + "/getTrip",
        tripData,
    );
    return response.data;
};

export const getTripById = async (tripDataId) => {
    const response = await axios.get(
        import.meta.env.VITE_RENDER_URL + "/getTripById",
        tripDataId,
    );
    return response.data;
};

export const deleteTrip = async (tripData) => {
    const response = await axios.delete(
        import.meta.env.VITE_RENDER_URL + "/deleteTrip",
        tripData,
    );
    return response.data;
};

export const editTrip = async ({ tripId, tripData }) => {
    const response = await axios.put(
        import.meta.env.VITE_RENDER_URL + "/tripId",
        tripData,
    );

    return response.data;
};

module.exports = { createTrip, getTrip, getTripById, deleteTrip, editTrip };
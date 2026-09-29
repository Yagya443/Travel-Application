import axios from "axios";

export const createTrip = async (tripData) => {
    const response = await axios.post(
        `${import.meta.env.VITE_RENDER_URL}/trip/createTrip`,
        tripData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );
    return response.data;
};

export const getTrip = async () => {
    const response = await axios.get(
        `${import.meta.env.VITE_RENDER_URL}/trip/getTrip`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );
    return response.data;
};

export const getTripById = async (tripDataId) => {
    const response = await axios.get(
        `${import.meta.env.VITE_RENDER_URL}/trip/getTripById/${tripDataId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );
    return response.data;
};

export const deleteTrip = async ({ tripId }) => {
    const response = await axios.delete(
        `${import.meta.env.VITE_RENDER_URL}/trip/deleteTrip/${tripId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );
    return response.data;
};

export const editTrip = async ({ tripId, tripData }) => {
    const response = await axios.put(
        `${import.meta.env.VITE_RENDER_URL}/trip/editTrip/${tripId}`,
        tripData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );

    return response.data;
};

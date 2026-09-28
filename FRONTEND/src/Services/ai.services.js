import axios from "axios";

export const generateTrip = async (tripData) => {
    const response = await axios.post(
        `${import.meta.env.VITE_RENDER_URL}/ai/generateTrip`,
        tripData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );

    return response.data;
};

export const generateAudit = async (auditData) => {
    const response = await axios.post(
        `${import.meta.env.VITE_RENDER_URL}/ai/generateAudit`,
        auditData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    );

    return response.data;
};

export const createTrip = async (tripData) => {
    const response = await axios.post(
        `${import.meta.env.VITE_RENDER_URL}/trip/createTrip`,
        tripData,
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
    );
    return response.data
};

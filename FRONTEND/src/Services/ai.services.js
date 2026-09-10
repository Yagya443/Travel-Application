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

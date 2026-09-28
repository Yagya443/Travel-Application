import { generateAudit, generateTrip,createTrip } from "../Services/ai.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useGenerateTrip = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: generateTrip,

        onSuccess: (data) => {
            queryClient.setQueryData(
                ["tripRecommendation"],
                data.recommendation,
            );
        },

        onError: (error) => {
            console.log("AI Error:", error);
        },
    });
};

export const useGenerateAudit = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: generateAudit,

        onSuccess: (data) => {
            queryClient.setQueryData(["audit"], data);
        },

        onError: (error) => {
            console.log("AI Error:", error);
        },
    });
};

export const useTripPlan = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTrip,

        onSuccess: (data) => {
            queryClient.setQueryData(["plan"], data);
        },

        onError: (error) => {
            console.log("AI Error:", error);
            console.log("Response:", error.response?.data);
        },
    });
};

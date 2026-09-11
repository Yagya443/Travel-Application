import { useMutation } from "@tanstack/react-query";
import {generateAudit, generateTrip} from "../Services/ai.services"


export const useGenerateTrip = () => {
    return useMutation({
        mutationFn: generateTrip,
    });
};

export const useGenerateAudit = () => {
    return useMutation({
        mutationFn: generateAudit,
    });
};
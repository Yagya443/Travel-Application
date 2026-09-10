import { useMutation } from "@tanstack/react-query";
import {generateTrip} from "../Services/ai.services"


export const useGenerateTrip = () => {
    return useMutation({
        mutationFn: generateTrip,
    });
};
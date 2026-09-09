import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createTrip,
    deleteTrip,
    editTrip,
    getTrip,
    getTripById,
} from "../Services/trip.service";

export const useGetTrips = () => {
    return useQuery({
        queryKey: ["trips"],
        queryFn: getTrip,
    });
};

export const useGetTripById = (tripId) => {
    return useQuery({
        queryKey: ["trip", tripId],
        queryFn: () => getTripById(tripId),
        enabled: !!tripId,
    });
};

export const useCreateTrip = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTrip,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["trips"],
            });
        },
    });
};

export const useDeleteTrip = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTrip,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["trips"],
            });
        },
    });
};

export const useEditTrip = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editTrip,

        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["trips"],
            });

            queryClient.invalidateQueries({
                queryKey: ["trip", variables.tripId],
            });
        },
    });
};


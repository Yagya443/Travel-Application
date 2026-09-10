import { useQuery, useMutation } from "@tanstack/react-query";
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
    return useMutation({
        mutationFn:createTrip,
    });
};

export const useDeleteTrip = () => {
    return useMutation({
        mutationFn:deleteTrip,
    });
};

export const useEditTrip = () => {
    return useMutation({
        mutationFn:editTrip,
    });
};
